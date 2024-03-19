import styles from "./FrameItem.module.css";

export default function FrameItem(props) {
   //console.log("frame", props.data.fields.url);
   return <iframe className={styles.frameItem} src={props.data.fields.url}></iframe>;
}
