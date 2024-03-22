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
   const [index, setIndex] = useState(-1);
   const [showing, setShowing] = useState(false);
   const [showOverlay, setShowOverlay] = useState(true);

   const timeoutRef = useRef(null);
   const screenRef = useRef(null);
   const featureRef = useRef(null);

   useEffect(() => {
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

   useEffect(() => {
      const delay = contentfulData ? contentfulData.board.items[index].fields.delay : 3;
      //console.log("data", contentfulData);
      setShowOverlay(contentfulData ? !contentfulData.board.items[index].fields.hideOverlay : true);
      resetTimeout();
      setShowing(true);
      if (contentfulData) {
         const layers = contentfulData.board.items[index].fields.layers;
         let override = false;
         for (let i = 0; i < layers.length; i++) {
            if (layers[i].fields.vidOverride && layers[i].fields.asset.fields.file.contentType.includes("video")) {
               override = true;
               break;
            }
         }
         if (!override) {
            timeoutRef.current = setTimeout(() => getNext(), delay * 1000);
         }
      } else {
         timeoutRef.current = setTimeout(() => getNext(), delay * 1000);
      }

      return () => {
         resetTimeout();
      };
   }, [index]);

   function getNext() {
      const len = contentfulData ? contentfulData.board.items.length - 1 : -1;
      setIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1));
      setShowing(false);
   }

   function resetTimeout() {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }
   }

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
            setIndex(0);
         });
   };

   function getModule() {
      const item = contentfulData.board.items[index];
      if (item) {
         return <Feature data={item} onDispatch={getNext} />;
      } else {
         return null;
      }
   }

   return (
      <div className={styles.boardContent}>
         <div className={styles.fixedScreen} ref={screenRef}>
            <CSSTransition in={showing} nodeRef={featureRef} timeout={1000} classNames="fade" unmountOnExit>
               <div id={styles.feature} ref={featureRef}>
                  {contentfulData && getModule()}
               </div>
            </CSSTransition>
            <Overlay show={showOverlay} />
         </div>
      </div>
   );
}
