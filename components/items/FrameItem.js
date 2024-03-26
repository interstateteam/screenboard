import { useRef } from "react";
import styles from "./FrameItem.module.css";

export default function FrameItem(props) {
   const data = props.data.fields;

   const frameRef = useRef(null);

   useEffect(() => {
      if (frameRef.current) {
         frameRef.current.addEventListener("message", onFrameComplete);
      }

      return () => {
         if (frameRef.current) {
            frameRef.current.removeEventListener("message", onFrameComplete);
         }
      };
   }, [props.data.fields.url]);

   function onFrameComplete() {
      frameRef.current.removeEventListener("message", onFrameComplete);
      props.onDispatch();
   }

   const frameStyle = {
      left: data.posLeft + "%",
      top: data.posTop + "%",
      width: data.width + "%",
      height: data.height + "%",
   };
   //console.log("frame", props.data.fields.url);
   return <iframe ref={frameRef} className={styles.frameItem} src={props.data.fields.url} style={frameStyle}></iframe>;
}
