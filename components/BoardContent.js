"use client";

import { useChannel } from "ably/react";
import { useEffect, useState, useRef } from "react";
import styles from "./BoardContent.module.css";
import TextItem from "./TextItem";
import ImageItem from "./ImageItem";
import VideoItem from "./VideoItem";

export default function BoardContent() {
   const [channelData, setChannelData] = useState({ msg: "initial fetch" });
   const [contentfulData, setContentfulData] = useState(null);
   const [index, setIndex] = useState(0);

   //const delay = 2500;
   const timeoutRef = useRef(null);

   useEffect(() => {
      retrieveContentfulData();
   }, []);

   useEffect(() => {
      const len = contentfulData ? contentfulData.board.items.length - 1 : -1;
      const delay = contentfulData ? contentfulData.board.items[index].fields.delay : 3;
      resetTimeout();
      timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1)), delay * 1000);

      return () => {
         resetTimeout();
      };
   }, [index]);

   function resetTimeout() {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }
   }

   const { channel } = useChannel("status-updates", (message) => {
      setChannelData({ msg: message.data.text });
      retrieveContentfulData();
   });

   /*
   const publicFromClientHandler = (_event) => {
      if (channel === null) return;
      channel.publish("update-from-client", { text: `changed @ ${new Date().toISOString()}` });
   };

   const publicFromServerHandler = (_event) => {
      fetch("/api/publish", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({ text: "server btn" }),
      });
   };
   */

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
      if (item && item.sys) {
         switch (item.sys.contentType.sys.id) {
            case "textItem":
               return <TextItem data={item} />;
            case "imageItem":
               return <ImageItem data={item} />;
            case "videoItem":
               return <VideoItem data={item} />;
            default:
               return null;
         }
      } else {
         return null;
      }
   }

   return <div className={styles.boardContent}>{contentfulData && getModule()}</div>;
}
