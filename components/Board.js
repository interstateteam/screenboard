"use client";

import * as Ably from "ably/promises";
import { AblyProvider, useChannel } from "ably/react";
import { useEffect, useState } from "react";

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
   const [channelData, setChannelData] = useState({ msg: "initial fetch" });
   const [contentfulData, setContentfulData] = useState(null);

   useEffect(() => {
      retrieveContentfulData();
   }, []);

   const { channel } = useChannel("status-updates", (message) => {
      console.log("change detected");
      setChannelData({ msg: message.data.text });
      retrieveContentfulData();
   });

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

   const retrieveContentfulData = (_event) => {
      fetch("/api/contentful", {
         method: "GET",
         headers: {
            "content-type": "application/json",
         },
      })
         .then((res) => {
            return res.json();
         })
         .then((jsonData) => {
            return JSON.stringify(jsonData);
         })
         .then((jsonStr) => {
            setContentfulData(JSON.parse(jsonStr).result);
            console.log(jsonStr);
         });
   };

   return (
      <>
         <div>
            <button onClick={publicFromClientHandler}>Publish from Client</button>
            &nbsp;
            <button onClick={publicFromServerHandler}>Publish from Server</button>
            &nbsp;
            {channelData.msg}
            <br />
            {contentfulData && contentfulData.board.title}
         </div>
      </>
   );
}
