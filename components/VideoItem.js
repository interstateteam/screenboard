import styles from "./VideoItem.module.css";

export default function VideoItem(props) {
   //console.log("video", props);
   return (
      <video className={styles.videoItem} width="320" height="240" muted autoPlay preload="true">
         <source src={"https:" + props.data.fields.content.fields.file.url} type="video/mp4" />
      </video>
   );
}
