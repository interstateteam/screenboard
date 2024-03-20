"use client";

import { useEffect, useState } from "react";
//import styles from "./BoardContent.module.css";
//import Feature from "./Feature";

export default function Entity() {
   const [contentfulData, setContentfulData] = useState(null);

   useEffect(() => {
      retrieveContentfulData();
   }, []);

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

   function getModule() {
      return <div>Entity Page!</div>;
      /*
      const item = contentfulData.board.items[index];
      if (item) {
         return <Feature data={item} onDispatch={getNext} />;
      } else {
         return null;
      }
      */
   }

   return <div>{contentfulData && getModule()}</div>;
}
