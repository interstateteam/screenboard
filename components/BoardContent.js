"use client";

import { useChannel } from "ably/react";
import { useEffect, useState, useRef } from "react";
import styles from "./BoardContent.module.css";
import Feature from "./Feature";

export default function BoardContent() {
   const [channelData, setChannelData] = useState({ msg: "initial fetch" });
   const [contentfulData, setContentfulData] = useState(null);
   const [index, setIndex] = useState(0);

   const timeoutRef = useRef(null);
   const screenRef = useRef(null);

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
      };
   }, []);

   useEffect(() => {
      const delay = contentfulData ? contentfulData.board.items[index].fields.delay : 3;
      //console.log(contentfulData);
      resetTimeout();
      if (contentfulData && contentfulData.board.items[index].fields.content.fields.asset) {
         if (contentfulData.board.items[index].fields.content.fields.vidOverride && contentfulData.board.items[index].fields.content.fields.asset.fields.file.contentType.includes("video")) {
            //Video asset - do nothing
         } else {
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
      setIndex(0);
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
            {contentfulData && getModule()}
         </div>
      </div>
   );
}
