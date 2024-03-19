import Image from "next/image";
import TextItem from "./items/TextItem";
import styles from "./Overlay.module.css";

export default function Overlay(props) {
   //console.log("overlay", props);

   const data = props.data.fields;

   const overlayStyle = {
      backgroundColor: data.backgroundColour,
      opacity: data.backgroundOpacity,
   };

   return (
      <div className={styles.overlay}>
         <div className={styles.overlayItem} style={overlayStyle}></div>
         {data.image && (
            <div className={styles.overlayItem}>
               <Image
                  className={styles.overlayImage}
                  src={"https:" + data.image.fields.file.url}
                  alt="image"
                  sizes="100vw"
                  style={{
                     width: "auto",
                     height: "100vh",
                  }}
                  width={data.image.fields.file.details.image.width}
                  height={data.image.fields.file.details.image.height}
               />
            </div>
         )}
         {data.textOverlay && (
            <div className={styles.overlayItem}>
               <TextItem data={data.textOverlay} />
            </div>
         )}
      </div>
   );
}
