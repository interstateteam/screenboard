const weatherIcons = {
   clear: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21" />
            <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate" />
         </g>
      </svg>
   ),
   cloudy: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <g>
            <path fill="none" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
            <animateTransform attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0" />
         </g>
      </svg>
   ),
   partly: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <defs>
            <clipPath id="a">
               <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z" />
            </clipPath>
         </defs>
         <g clipPath="url(#a)">
            <g>
               <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17" />
               <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate" />
            </g>
         </g>
         <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
      </svg>
   ),
   overcast: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <defs>
            <clipPath id="a">
               <path fill="none" d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z" />
            </clipPath>
         </defs>
         <g clipPath="url(#a)">
            <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z" />
            <animateTransform attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-2.1 0; 2.1 0; -2.1 0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
            <animateTransform attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0" />
         </g>
      </svg>
   ),
   fog: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M17 58h30" />
            <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M17 52h30" />
            <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0" />
         </g>
      </svg>
   ),
   drizzle: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M24.08 45.01l-.16.98" />
            <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.08 45.01l-.16.98" />
            <animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M38.08 45.01l-.16.98" />
            <animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
      </svg>
   ),
   rain: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M24.39 43.03l-.78 4.94" />
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.39 43.03l-.78 4.94" />
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M38.39 43.03l-.78 4.94" />
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
      </svg>
   ),
   snow: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <circle cx="31" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
            <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12" />
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45" />
            <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
         </g>
         <g>
            <circle cx="24" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
            <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12" />
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45" />
            <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
         </g>
         <g>
            <circle cx="38" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
            <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12" />
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45" />
            <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
         </g>
      </svg>
   ),
   snowShower: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <circle cx="24" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
            <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12" />
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45" />
            <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
         </g>
         <g>
            <circle cx="38" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
            <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12" />
            <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45" />
            <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M24.08 45.01l-.16.98" />
            <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.08 45.01l-.16.98" />
            <animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M38.08 45.01l-.16.98" />
            <animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
      </svg>
   ),
   thunderstorm: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="#ffffff" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1" />
         </g>
      </svg>
   ),
   thunderstormHail: (
      <svg width="100" height="100" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M24.39 43.03l-.78 4.94" />
            <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.39 43.03l-.78 4.94" />
            <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M38.39 43.03l-.78 4.94" />
            <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10" />
            <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0" />
         </g>
         <g>
            <path fill="#ffffff" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1" />
         </g>
      </svg>
   ),
};

const weatherIconStatics = {
   clear: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21" />
         </g>
      </svg>
   ),
   cloudy: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <g>
            <path fill="none" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
         </g>
      </svg>
   ),
   partly: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <defs>
            <clipPath id="a">
               <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z" />
            </clipPath>
         </defs>
         <g clipPath="url(#a)">
            <g>
               <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17" />
            </g>
         </g>
         <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
      </svg>
   ),
   overcast: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <defs>
            <clipPath id="a">
               <path fill="none" d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z" />
            </clipPath>
         </defs>
         <g clipPath="url(#a)">
            <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="2" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
         </g>
      </svg>
   ),
   fog: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinejoin="round" strokeWidth="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M17 58h30" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" d="M17 52h30" />
         </g>
      </svg>
   ),
   drizzle: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" transform="translate(0 12)" d="M24.08 45.01l-.16.98" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" transform="translate(0 0)" strokeWidth="2" d="M31.08 45.01l-.16.98" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" transform="translate(0 6)" d="M38.08 45.01l-.16.98" />
         </g>
      </svg>
   ),
   rain: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" transform="translate(0 6)" d="M24.39 43.03l-.78 4.94" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" transform="translate(0 0)" d="M31.39 43.03l-.78 4.94" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" transform="translate(0 8)" d="M38.39 43.03l-.78 4.94" />
         </g>
      </svg>
   ),
   snow: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g transform="translate(0 10)">
            <circle cx="31" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
         </g>
         <g transform="translate(0 0)">
            <circle cx="24" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
         </g>
         <g transform="translate(0 4)">
            <circle cx="38" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
         </g>
      </svg>
   ),
   snowShower: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g transform="translate(0 6)">
            <circle cx="24" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
         </g>
         <g transform="translate(0 2)">
            <circle cx="38" cy="45" r="1.25" fill="none" stroke="#ffffff" strokeMiterlimit="10" />
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63" />
         </g>
         <g transform="translate(0 12)">
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M24.08 45.01l-.16.98" />
         </g>
         <g transform="translate(0 0)">
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.08 45.01l-.16.98" />
         </g>
         <g transform="translate(0 10)">
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M38.08 45.01l-.16.98" />
         </g>
      </svg>
   ),
   thunderstorm: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="#ffffff" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
         </g>
      </svg>
   ),
   thunderstormHail: (
      <svg width="30" height="30" viewBox="0 0 64 64">
         <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0" />
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M24.39 43.03l-.78 4.94" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M31.39 43.03l-.78 4.94" />
         </g>
         <g>
            <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M38.39 43.03l-.78 4.94" />
         </g>
         <g>
            <path fill="#ffffff" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
         </g>
      </svg>
   ),
};

const weatherCodes = [
   { description: "Clear sky", icon: weatherIcons.clear, static: weatherIconStatics.clear },
   { description: "Mainly clear", icon: weatherIcons.clear, static: weatherIconStatics.clear },
   { description: "Partly cloudy", icon: weatherIcons.partly, static: weatherIconStatics.partly },
   { description: "Overcast", icon: weatherIcons.overcast, static: weatherIconStatics.overcast },
   { description: "Fog", icon: weatherIcons.fog, static: weatherIconStatics.fog },
   { description: "Fog", icon: weatherIcons.fog, static: weatherIconStatics.fog },
   { description: "Light drizzle", icon: weatherIcons.drizzle, static: weatherIconStatics.drizzle },
   { description: "Moderate drizzle", icon: weatherIcons.drizzle, static: weatherIconStatics.drizzle },
   { description: "Dense drizzle", icon: weatherIcons.drizzle, static: weatherIconStatics.drizzle },
   { description: "Light freezing drizzle", icon: weatherIcons.drizzle, static: weatherIconStatics.drizzle },
   { description: "Dense freezing drizzle", icon: weatherIcons.drizzle, static: weatherIconStatics.drizzle },
   { description: "Slight rain", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Moderate rain", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Heavy rain", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Slight freezing rain", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Heavy freezing rain", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Slight snow fall", icon: weatherIcons.snow, static: weatherIconStatics.snow },
   { description: "Moderate snow fall", icon: weatherIcons.snow, static: weatherIconStatics.snow },
   { description: "Heavy snow fall", icon: weatherIcons.snow, static: weatherIconStatics.snow },
   { description: "Snow", icon: weatherIcons.snow, static: weatherIconStatics.snow },
   { description: "Slight rain showers", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Moderate rain showers", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Heavy rain showers", icon: weatherIcons.rain, static: weatherIconStatics.rain },
   { description: "Slight snow showers", icon: weatherIcons.snowShower, static: weatherIconStatics.snowShower },
   { description: "Heavy snow showers", icon: weatherIcons.snowShower, static: weatherIconStatics.snowShower },
   { description: "Thunderstorm", icon: weatherIcons.thunderstorm, static: weatherIconStatics.thunderstorm },
   { description: "Thunderstorm with slight hail", icon: weatherIcons.thunderstormHail, static: weatherIconStatics.thunderstormHail },
   { description: "Thunderstorm with heavy hail", icon: weatherIcons.thunderstormHail, static: weatherIconStatics.thunderstormHail },
];

export function getWeatherCode(code) {
   switch (code) {
      case 0:
         return weatherCodes[0];
      case 1:
         return weatherCodes[1];
      case 2:
         return weatherCodes[2];
      case 3:
         return weatherCodes[3];
      case 45:
         return weatherCodes[4];
      case 48:
         return weatherCodes[5];
      case 51:
         return weatherCodes[6];
      case 53:
         return weatherCodes[7];
      case 55:
         return weatherCodes[8];
      case 56:
         return weatherCodes[9];
      case 57:
         return weatherCodes[10];
      case 61:
         return weatherCodes[11];
      case 63:
         return weatherCodes[12];
      case 65:
         return weatherCodes[13];
      case 66:
         return weatherCodes[14];
      case 67:
         return weatherCodes[15];
      case 71:
         return weatherCodes[16];
      case 73:
         return weatherCodes[17];
      case 75:
         return weatherCodes[18];
      case 77:
         return weatherCodes[19];
      case 80:
         return weatherCodes[20];
      case 81:
         return weatherCodes[21];
      case 82:
         return weatherCodes[22];
      case 85:
         return weatherCodes[23];
      case 86:
         return weatherCodes[24];
      case 95:
         return weatherCodes[25];
      case 96:
         return weatherCodes[26];
      case 99:
         return weatherCodes[27];
   }
}
