import Image from "next/image";
import styles from "./ImageItem.module.css";

export default function ImageItem(props) {
   const data = props.data.fields.content.fields.file;
   //console.log("image", props);
   return (
      <Image
         className={styles.imageItem}
         src={"https:" + data.url}
         alt="image"
         sizes="100vw"
         style={{
            width: "auto",
            height: "100vh",
         }}
         width={data.details.image.width}
         height={data.details.image.height}
         priority
      />
   );
}
