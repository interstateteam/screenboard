import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import localFont from "next/font/local";
import styles from "./Overlay.module.css";
import WeatherPanel from "./WeatherPanel";
import NewsBanner from "./NewsBanner";

const ReplicaLLWebB = localFont({ src: "./fonts/ReplicaLLWeb-Bold.woff2" });

export default function Overlay(props) {
   //console.log("overlay", props);

   const panelRef = useRef(null);
   const bannerRef = useRef(null);

   return (
      <div className={styles.overlay}>
         <CSSTransition in={props.show} nodeRef={panelRef} timeout={1000} classNames="weatherHide">
            <div className={ReplicaLLWebB.className} ref={panelRef}>
               <WeatherPanel />
            </div>
         </CSSTransition>
         {process.env.NODE_ENV === "development" && (
            <CSSTransition in={props.show} nodeRef={bannerRef} timeout={1000} classNames="newsHide">
               <div className={ReplicaLLWebB.className} ref={bannerRef}>
                  <NewsBanner />
               </div>
            </CSSTransition>
         )}
      </div>
   );
}
