import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import localFont from "next/font/local";
import styles from "./Overlay.module.css";
import WeatherPanel from "./WeatherPanel";

const ReplicaLLWebB = localFont({ src: "./fonts/ReplicaLLWeb-Bold.woff2" });

export default function Overlay(props) {
   //console.log("overlay", props);

   const panelRef = useRef(null);

   return (
      <div className={styles.overlay}>
         <CSSTransition in={props.show} nodeRef={panelRef} timeout={1000} classNames="slide">
            <div className={ReplicaLLWebB.className} ref={panelRef}>
               <WeatherPanel />
            </div>
         </CSSTransition>
      </div>
   );
}
