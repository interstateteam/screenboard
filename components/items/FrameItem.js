import styles from "./FrameItem.module.css";

export default function FrameItem(props) {
   const data = props.data.fields;

   const frameStyle = {
      left: data.posLeft + "%",
      top: data.posTop + "%",
      width: data.width + "%",
      height: data.height + "%",
   };
   //console.log("frame", props.data.fields.url);
   return <iframe className={styles.frameItem} src={props.data.fields.url} style={frameStyle}></iframe>;
}
