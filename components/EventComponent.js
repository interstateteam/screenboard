import { useEffect, useState } from "react";

const EventComponent = () => {
   const [message, setMessage] = useState("");

   useEffect(() => {
      const eventSource = new EventSource("http://localhost:5050/events");

      if (typeof EventSource !== "undefined") {
         console.log("all good!", eventSource);
      } else {
         console.log("no event");
      }

      eventSource.onerror = (e) => {
         console.log("error", e);
      };

      eventSource.onmessage = (e) => {
         console.log("msg");
         const eventData = JSON.parse(e.data);
         setMessage(eventData.message);
      };

      return () => {
         eventSource.close();
      };
   }, []);

   return <div>{message} hello there now</div>;
};

export default EventComponent;
