import Image from "next/image";
import styles from "./page.module.css";
import Board from "@/components/Board";

export default function Home() {
   return (
      <main className={styles.main}>
         <div className={styles.description}>
            <Board />
         </div>
      </main>
   );
}
