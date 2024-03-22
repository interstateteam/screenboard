import { useEffect, useState, useRef } from "react";
import styles from "./NewsBanner.module.css";

export default function NewsBanner() {
   const [news, setNews] = useState(null);
   const [time, setTime] = useState(0);

   const timeoutRef = useRef(null);

   useEffect(() => {
      const url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=" + process.env.NEXT_PUBLIC_NEWS_API_KEY;
      const fetchData = async () => {
         try {
            const response = await fetch(url);
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const result = await response.json();

            setNews(result.articles);
         } catch (error) {
            throw new Error(error);
         }
      };

      fetchData();

      timeoutRef.current = setTimeout(() => {
         setTime(new Date.now());
      }, 3600000);

      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, [time]);

   return (
      <>
         {news && (
            <div className={styles.banner}>
               <div className={styles.ticker}>
                  {news.map((item, i) => {
                     return (
                        <div className={styles.item} key={i}>
                           <p>{item.title}</p>
                           <p>
                              <span>/</span>
                           </p>
                        </div>
                     );
                  })}
               </div>
            </div>
         )}
      </>
   );
}

/*
<div className={styles.iconContainer}>
                  <div className={styles.icon}>
                     <svg width="100" height="100">
                        <path d={weather.icon} />
                     </svg>
                  </div>
               </div>


               <div className={styles.icon}>{weather.icon}</div>
               */
