import styles from "./FrameItem.module.css";

export default function FrameItem(props) {
   return <iframe className={styles.frameItem} src={props.data.fields.content} title={props.data.fields.id}></iframe>;
}
