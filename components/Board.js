"use client";

import * as Ably from "ably/promises";
import { AblyProvider } from "ably/react";
import BoardContent from "./BoardContent";

export default function Board() {
   const prefix = process.env.API_ROOT || "";
   const client = new Ably.Realtime({ authUrl: `${prefix}/token`, authMethod: "POST" });

   return (
      <AblyProvider client={client}>
         <BoardContent />
      </AblyProvider>
   );
}
