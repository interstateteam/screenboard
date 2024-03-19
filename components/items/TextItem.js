import styles from "./TextItem.module.css";

export default function TextItem(props) {
   //console.log("text", props.data.fields);

   const data = props.data.fields;

   let posClass = "";

   switch (data.position) {
      case "Center":
         posClass += "cpos";
         break;
      case "Center Left":
         posClass += "clpos";
         break;
      case "Center Right":
         posClass += "crpos";
         break;
      case "Top Center":
         posClass += "tcpos";
         break;
      case "Top Left":
         posClass += "tlpos";
         break;
      case "Top Right":
         posClass += "trpos";
         break;
      case "Bottom Center":
         posClass += "bcpos";
         break;
      case "Bottom Left":
         posClass += "blpos";
         break;
      case "Bottom Right":
         posClass += "brpos";
         break;
   }

   const fontStyle = {
      color: data.colour,
      fontFamily: data.font,
      fontSize: data.fontSize,
   };

   return (
      <div className={`${styles.textItem} ${styles[posClass]}`} style={fontStyle}>
         <div className={styles.pos}>{props.data.fields.content}</div>
      </div>
   );
}
