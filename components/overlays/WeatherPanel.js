import { useEffect, useState, useRef } from "react";
import localFont from "next/font/local";
import styles from "./WeatherPanel.module.css";
import { getWeatherCode } from "../../services/WeatherDetails";
import Clock from "react-live-clock";

const ReplicaLLWebB = localFont({ src: "../../public/fonts/ReplicaLLWeb-Bold.woff2" });

export default function Overlay() {
   const [isClient, setIsClient] = useState(false);
   const [weather, setWeather] = useState(null);
   const [count, setCount] = useState(-1);

   const timeoutRef = useRef(null);

   const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
   const months = ["January", "February", "March", "April", "May", "June", "July", "Auguts", "September", "October", "Novemebr", "December"];

   useEffect(() => {
      setIsClient(true);
      const url = "https://api.open-meteo.com/v1/forecast?latitude=51.3&longitude=0.13&current=temperature_2m,weather_code&timezone=GMT&forecast_days=1";
      const fetchData = async () => {
         try {
            const response = await fetch(url);
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const result = await response.json();

            const d = new Date();
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];

            const details = getWeatherCode(result.current.weather_code);

            const data = {
               date: day + " " + date + " " + month,
               description: details.description,
               icon: details.icon,
               static: details.static,
               temperature: result.current.temperature_2m,
            };
            setWeather(data);
         } catch (error) {
            setWeather(error);
         }
      };

      fetchData();

      timeoutRef.current = setTimeout(() => {
         setCount((count) => (count > 0 ? 0 : count + 1));
      }, 3600000);

      return () => {
         if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
         }
      };
   }, [count]);

   return (
      <div className={styles.panel}>
         {isClient && (
            <>
               {weather && (
                  <div className={ReplicaLLWebB.className}>
                     <div className={styles.panelContent}>
                        <div className={styles.details}>
                           <div className={styles.title}>
                              <h2>
                                 INTER<span>&#47;</span>STATE
                              </h2>
                              <p>{weather.date}</p>
                           </div>
                           <hr />
                           <div className={styles.main}>
                              <h2>
                                 {weather.temperature}
                                 <sup>{"\u00B0" + "C"}</sup>
                              </h2>
                           </div>
                        </div>
                        <div className={styles.iconContainer}>
                           <div className={styles.icon}>{weather.icon}</div>
                        </div>
                     </div>
                     <div className={styles.description}>
                        <div className={styles.icon}>{weather.static}</div>
                        <p>{weather.description}</p>
                     </div>
                  </div>
               )}
               <Clock className={styles.clock} format={"HH:mm"} ticking={true} timezone={"GB"} suppressHydrationWarning />
            </>
         )}
      </div>
   );
}

/*
{weather && (
            <div className={ReplicaLLWebB.className}>
               <div className={styles.panelContent}>
                  <div className={styles.details}>
                     <div className={styles.title}>
                        <h2>
                           INTER<span>&#47;</span>STATE
                        </h2>
                        <p>{weather.date}</p>
                     </div>
                     <hr />
                     <div className={styles.main}>
                        <h2>
                           {weather.temperature}
                           <sup>{"\u00B0" + "C"}</sup>
                        </h2>
                     </div>
                  </div>
                  <div className={styles.iconContainer}>
                     <div className={styles.icon}>{weather.icon}</div>
                  </div>
               </div>
               <div className={styles.description}>
                  <div className={styles.icon}>{weather.static}</div>
                  <p>{weather.description}</p>
               </div>
            </div>
         )}
         <Clock className={styles.clock} format={"HH:mm"} ticking={true} timezone={"GB"} suppressHydrationWarning />
*/
