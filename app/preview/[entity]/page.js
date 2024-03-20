"use client";

import { useEffect, useState } from "react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import pageStyles from "@/app/page.module.css";
import boardStyles from "@/components/BoardContent.module.css";
import Feature from "@/components/Feature";

export default function Entity(props) {
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
      <ContentfulLivePreviewProvider locale="en-US">
         <main className={pageStyles.main}>
            <div className={boardStyles.boardContent}>{contentfulData && getModule()}</div>;
         </main>
      </ContentfulLivePreviewProvider>
   );
}
