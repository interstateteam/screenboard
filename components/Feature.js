import styles from "./Feature.module.css";
import Overlay from "./Overlay";
import MediaItem from "./items/MediaItem";
import FrameItem from "./items/FrameItem";
import TextItem from "./items/TextItem";

export default function Feature(props) {
   function getModule() {
      const item = props.data.fields.content;
      switch (item.sys.contentType.sys.id) {
         case "media":
            return <MediaItem data={item} onDispatch={props.onDispatch} />;
         case "iFrame":
            return <FrameItem data={item} />;
         case "text":
            return <TextItem data={item} />;
         default:
            return null;
      }
   }

   return (
      <div className={styles.feature}>
         {getModule()}
         {props.data.fields.overlay && <Overlay data={props.data.fields.overlay} />}
      </div>
   );
}
