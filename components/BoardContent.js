"use client";

import { useChannel } from "ably/react";
import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./BoardContent.module.css";
import Overlay from "./Overlay";
import Feature from "./Feature";

export default function BoardContent() {
   const [channelData, setChannelData] = useState({ msg: "initial fetch" });
   const [contentfulData, setContentfulData] = useState(null);
   const [newsData, setNewsData] = useState(null);
   const [index, setIndex] = useState(-1);
   const [showing, setShowing] = useState(false);
   const [showOverlay, setShowOverlay] = useState(true);
   const [hideNewsBanner, setHideNewsBanner] = useState(false);
   const [loopCount, setLoopCount] = useState(0);
   const [loopMax, setLoopMax] = useState(0);

   const timeoutRef = useRef(null);
   const screenRef = useRef(null);
   const featureRef = useRef(null);

   //initial hook
   useEffect(() => {
      retrieveNewsData();
      retrieveContentfulData();

      const w = 1080;
      const h = 1920;

      const handleResize = (e) => {
         let scale = Math.min(e.target.innerWidth / w, e.target.innerHeight / h);

         screenRef.current.style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")";
      };
      window.addEventListener("resize", handleResize);

      handleResize({ target: window });

      return () => {
         window.removeEventListener("resize", handleResize);
         resetTimeout();
      };
   }, []);

   //contentful data update hook
   useEffect(() => {
      if (contentfulData) {
         const newsSettings = contentfulData.board.newsSettings.fields;
         setLoopMax(newsSettings.refreshRate);
         setIndex(0);
      }
   }, [contentfulData]);

   //Feature view update hook (index)
   useEffect(() => {
      if (index !== -1) {
         //updates news feed after new feed dismounts
         if (loopMax > 0) {
            if (loopCount >= loopMax) {
               retrieveNewsData();
               setLoopCount(0);
            }
         }

         const delay = contentfulData ? contentfulData.board.items[index].fields.delay : 3;
         setShowOverlay(contentfulData ? !contentfulData.board.items[index].fields.hideOverlay : true);
         resetTimeout();
         setShowing(true);
         let containsNews = false;
         if (contentfulData) {
            //console.log("data", contentfulData);
            const layers = contentfulData.board.items[index].fields.layers;
            let override = false;
            for (let i = 0; i < layers.length; i++) {
               if (layers[i].sys.contentType.sys.id === "news") {
                  updateLoopCount();
                  containsNews = true;
               }
               if ((layers[i].fields.vidOverride && layers[i].fields.asset.fields.file.contentType.includes("video")) || layers[i].fields.frameOverride || layers[i].fields.newsOverride) {
                  override = true;
                  break;
               }
            }
            if (!override) {
               timeoutRef.current = setTimeout(() => getNextFeature(), delay * 1000);
            }
         } else {
            //No data yet - check again in 1s
            timeoutRef.current = setTimeout(() => getNextFeature(), delay * 1000);
         }

         setHideNewsBanner(containsNews);
      } else {
         //Used if only on feature is set in CMS
         timeoutRef.current = setTimeout(() => getNextFeature(), 1 * 300);
      }

      return () => {
         resetTimeout();
      };
   }, [index]);

   const getNextFeature = () => {
      const len = contentfulData ? contentfulData.board.items.length - 1 : -1;
      if (index === 0 && len < 1) {
         setIndex(-1);
      } else {
         setIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
      }
      setShowing(false);
   };

   const resetTimeout = () => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }
   };

   const updateLoopCount = () => {
      setLoopCount((prevCount) => prevCount + 1);
   };

   const { channel } = useChannel("status-updates", (message) => {
      setChannelData({ msg: message.data.text });
      retrieveContentfulData();
   });

   const retrieveContentfulData = (_event) => {
      fetch("/api/contentful", {
         method: "GET",
         headers: {
            "content-type": "application/json",
         },
         cache: "no-store",
      })
         .then((res) => {
            return res.json();
         })
         .then((jsonData) => {
            return JSON.stringify(jsonData);
         })
         .then((jsonStr) => {
            setContentfulData(JSON.parse(jsonStr).result);
         });
   };

   const retrieveNewsData = (_event) => {
      /*
      const data = { q: "hello there" };
      fetch("/api/news?" + new URLSearchParams(data), {
         method: "GET",
         query: "hello there",
         headers: {
            "content-type": "application/json",
         },
         cache: "no-store",
      })
         .then((res) => {
            return res.json();
         })
         .then((jsonData) => {
            return JSON.stringify(jsonData);
         })
         .then((jsonStr) => {
            //console.log(JSON.parse(jsonStr).result);
            //setNewsData(JSON.parse(jsonStr).result);
         });
         */
   };

   const getFeatureModule = () => {
      const item = contentfulData.board.items[index];
      if (item) {
         return <Feature data={item} news={newsData} onDispatch={getNextFeature} />;
      } else {
         return null;
      }
   };

   return (
      <div className={styles.boardContent}>
         <div className={styles.fixedScreen} ref={screenRef}>
            <CSSTransition in={showing} nodeRef={featureRef} timeout={1000} classNames="fade" unmountOnExit>
               <div id={styles.feature} ref={featureRef}>
                  {contentfulData && getFeatureModule()}
               </div>
            </CSSTransition>
            <Overlay show={showOverlay} news={hideNewsBanner} />
         </div>
      </div>
   );
}
