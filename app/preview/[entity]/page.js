"use client";

import { useEffect, useState, useRef } from "react";
import pageStyles from "@/app/page.module.css";
import boardStyles from "@/components/BoardContent.module.css";
import Feature from "@/components/Feature";

export default function Entity() {
   const [contentfulData, setContentfulData] = useState(null);
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
      const url = window.location.href.split("/");
      const id = url[url.length - 1];
      const items = contentfulData.board.items;

      let data = null;

      for (let i = 0; i < items.length; i++) {
         if (items[i].sys.id === id) {
            data = items[i];
            break;
         }
      }

      if (data !== null) {
         return <Feature data={data} onDispatch={() => {}} />;
      } else {
         return <div>Feature Not Found</div>;
      }
      /*
      const item = contentfulData.board.items[index];
      if (item) {
         return <Feature data={item} onDispatch={getNext} />;
      } else {
         return null;
      }
      */
   }

   return (
      <main className={pageStyles.main}>
         <div className={boardStyles.boardContent}>
            <div className={boardStyles.fixedScreen} ref={screenRef}>
               {contentfulData && getModule()}
            </div>
         </div>
      </main>
   );
}
