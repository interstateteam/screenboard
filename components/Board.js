"use client";

import * as Ably from "ably/promises";
import { AblyProvider, useChannel } from "ably/react";
import { useState } from "react";

export default function Board() {
   const prefix = process.env.API_ROOT || "";
   const client = new Ably.Realtime({ authUrl: `${prefix}/token`, authMethod: "POST" });

   return (
      <AblyProvider client={client}>
         <PubSubMessages />
      </AblyProvider>
   );
}

function PubSubMessages() {
   const [logs, setLogs] = useState();

   const { channel } = useChannel("status-updates", (message) => {
      setLogs(message.data.text);
   });

   const publicFromClientHandler = (_event) => {
      if (channel === null) return;
      channel.publish("update-from-client", { text: `@ ${new Date().toISOString()}` });
   };

   const publicFromServerHandler = (_event) => {
      fetch("/api", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify({ text: `@ ${new Date().toISOString()}` }),
      });
   };

   return (
      <>
         <div>
            <button onClick={publicFromClientHandler}>Publish from Client</button>
            &nbsp;
            <button onClick={publicFromServerHandler}>Publish from Server</button>
            &nbsp;
            {logs}
         </div>
      </>
   );
}
