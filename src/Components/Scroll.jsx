// // useScroll.js
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const useScroll = () => {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       gsap.to(ref.current, {
//         scrollTrigger: {
//           trigger: ref.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: true,
//         },
//         opacity: 0,
//         y: 100,
//       });
//     }
//   }, []);

//   return ref;
// };

// export default useScroll;
