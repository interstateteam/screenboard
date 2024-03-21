import localFont from "next/font/local";
import styles from "./TextItem.module.css";

const GothamB = localFont({ src: "../fonts/Gotham-Book.otf" });
const GothamM = localFont({ src: "../fonts/Gotham-Medium.otf" });
const ReplicaLLWebB = localFont({ src: "../fonts/ReplicaLLWeb-Bold.woff2" });
const ReplicaLLWebL = localFont({ src: "../fonts/ReplicaLLWeb-Light.woff2" });

//const gothamBookFont = localFont({ src: "@/fonts/gothambook-webfont.woff2" });

export default function TextItem(props) {
   //console.log("text", props.data.fields);

   const data = props.data.fields;

   let font;
   switch (data.font) {
      case "Gotham-Book":
         font = GothamB;
         break;
      case "Gotham-Medium":
         font = GothamM;
         break;
      case "ReplicaLLWeb-Bold":
         font = ReplicaLLWebB;
         break;
      case "ReplicaLLWeb-Light":
         font = ReplicaLLWebL;
         break;
      default:
         font = ReplicaLLWebB;
         break;
   }

   const fontStyle = {
      color: data.colour,
      fontFamily: data.font,
      fontSize: data.fontSize,
      textAlign: data.align,
      left: data.posLeft + "%",
      top: data.posTop + "%",
      width: data.width + "%",
   };

   return (
      <div className={styles.textItem} style={fontStyle}>
         <p className={font.className}>{props.data.fields.content}</p>
      </div>
   );
}
