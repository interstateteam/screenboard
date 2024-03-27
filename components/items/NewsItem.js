import { useEffect } from "react";
import styles from "./NewsItem.module.css";

export default function News(props) {
   useEffect(() => {
      setTimeout(() => {
         props.onDispatch();
      }, 5000);
   }, []);

   return <div className={styles.news}>News!</div>;
}
