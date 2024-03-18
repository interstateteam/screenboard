"use client";

import * as Ably from "ably/promises";
import { AblyProvider } from "ably/react";
import BoardContent from "./BoardContent";
import { useEffect } from "react";

export default function Board() {
   const prefix = process.env.API_ROOT || "";
   const client = new Ably.Realtime({ authUrl: `${prefix}/token`, authMethod: "POST" });

   useEffect(() => {
      if (document) document.body.addEventListener("click", openFullscreen);
      return () => {
         document.body.removeEventListener("click", openFullscreen);
      };
   }, []);

   function openFullscreen() {
      if (document.body.requestFullscreen) {
         document.body.requestFullscreen();
      } else if (document.body.webkitRequestFullscreen) {
         /* Safari */
         document.body.webkitRequestFullscreen();
      } else if (document.body.msRequestFullscreen) {
         /* IE11 */
         document.body.msRequestFullscreen();
      }
   }

   return (
      <AblyProvider client={client}>
         <BoardContent />
      </AblyProvider>
   );
}
