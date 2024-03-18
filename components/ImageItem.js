import Image from "next/image";
import styles from "./ImageItem.module.css";

export default function ImageItem(props) {
   //console.log("image", props);
   return <Image className={styles.imageItem} src={"https:" + props.data.fields.content.fields.file.url} width={300} height={600} alt="image" />;
}
