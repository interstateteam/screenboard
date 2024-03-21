import styles from "./ColorItem.module.css";

export default function ColorItem(props) {
   const data = props.data.fields;

   const colorStyle = {
      backgroundColor: data.color,
      opacity: data.opacity,
      left: data.posLeft + "%",
      top: data.posTop + "%",
      width: data.width + "%",
      height: data.height + "%",
   };
   //console.log("frame", props.data.fields.url);
   return <div className={styles.colorItem} style={colorStyle}></div>;
}
