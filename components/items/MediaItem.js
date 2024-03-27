import Image from "next/image";
import styles from "./MediaItem.module.css";
import { useEffect, useRef } from "react";

export default function MediaItem(props) {
   const vidRef = useRef(null);

   useEffect(() => {
      if (vidRef.current) {
         vidRef.current.addEventListener("ended", onVidComplete);
      }

      return () => {
         if (vidRef.current) {
            vidRef.current.removeEventListener("ended", onVidComplete);
         }
      };
   }, [props.data.fields.asset.fields.file]);

   const onVidComplete = () => {
      vidRef.current.removeEventListener("ended", onVidComplete);
      props.onDispatch();
   };

   function getMediaItem() {
      const data = props.data.fields;
      const file = props.data.fields.asset.fields.file;
      if (file.contentType.includes("image")) {
         const imgW = data.width ? data.width + "%" : "auto";
         const imgH = data.height ? data.height + "%" : "100%";
         return (
            <Image
               className={styles.mediaItem}
               src={"https:" + file.url}
               alt="image"
               sizes="100%"
               style={{
                  width: imgW,
                  height: imgH,
               }}
               width={file.details.image.width}
               height={file.details.image.height}
               priority
            />
         );
      } else if (file.contentType.includes("video")) {
         const vidW = data.width ? data.width + "%" : "";
         const vidH = data.height ? data.height + "%" : "";
         return (
            <video ref={vidRef} key={file.url} className={styles.mediaItem} width={vidW} height={vidH} muted autoPlay preload="true">
               <source src={"https:" + file.url} type="video/mp4" />
            </video>
         );
      }
   }

   return <>{getMediaItem()}</>;
}
