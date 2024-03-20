import Image from "next/image";
import styles from "./MediaItem.module.css";
import { useEffect, useRef } from "react";

export default function MediaItem(props) {
   //console.log("media", props.data);

   const vidRef = useRef(null);

   useEffect(() => {
      if (vidRef.current) {
         vidRef.current.addEventListener("ended", onVidComplete);
      }
   }, [vidRef]);

   function onVidComplete() {
      vidRef.current.removeEventListener("ended", onVidComplete);
      props.onDispatch();
   }

   function getMediaItem() {
      const data = props.data.fields.asset.fields.file;
      if (data.contentType.includes("image")) {
         return (
            <Image
               className={styles.imageItem}
               src={"https:" + data.url}
               alt="image"
               sizes="100%"
               style={{
                  width: "auto",
                  height: "100%",
               }}
               width={data.details.image.width}
               height={data.details.image.height}
            />
         );
      } else if (data.contentType.includes("video")) {
         return (
            <video ref={vidRef} className={styles.videoItem} width="320" height="240" muted autoPlay preload="true">
               <source src={"https:" + data.url} type="video/mp4" />
            </video>
         );
      }
   }

   return <>{getMediaItem()}</>;
}
