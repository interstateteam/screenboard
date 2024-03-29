import styles from "./Feature.module.css";
import MediaItem from "./items/MediaItem";
import FrameItem from "./items/FrameItem";
import TextItem from "./items/TextItem";
import ColorItem from "./items/ColorItem";
import NewsItem from "./items/NewsItem";

export default function Feature(props) {
   const getModule = (item, i) => {
      switch (item.sys.contentType.sys.id) {
         case "media":
            return <MediaItem key={i} data={item} onDispatch={props.onDispatch} />;
         case "iFrame":
            return <FrameItem key={i} data={item} onDispatch={props.onDispatch} />;
         case "text":
            return <TextItem key={i} data={item} />;
         case "colorPane":
            return <ColorItem key={i} data={item} />;
         case "news":
            return <NewsItem key={i} data={item} articles={props.newsData} onDispatch={props.onDispatch} />;
         default:
            return null;
      }
   };

   return (
      <div className={styles.feature}>
         {props.data.fields.layers.map((layer, i) => {
            return getModule(layer, i);
         })}
      </div>
   );
}
