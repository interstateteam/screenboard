import styles from "./TextItem.module.css";

export default function TextItem(props) {
   return <div className={styles.textItem}>{props.data.fields.content}</div>;
}
