import React from 'react';
import styles from "../../assets/css/style.module.css";

const HeroSection = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>LIVE LONG & BEING STRONG</h1>
            {[...Array(15)].map((_, index) => (
                <div key={index} className={styles.circle}>
                    <span className={styles.dot}></span>
                </div>
            ))}
        </div>
    );
};

export default HeroSection;


// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { Box } from '@mui/material';
// import photo1 from '../../assets/svg/10.jpg';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//     useEffect(() => {
//         let ctx = gsap.context(() => {
//             gsap.fromTo(
//                 '.image-box',
//                 {
//                     clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
//                     opacity: 0,
//                 },
//                 {
//                     clipPath: 'polygon(0 0, 100% 0, 81% 100%, 19% 100%)',
//                     opacity: 1,
//                     duration: 1.5,
//                     ease: "power2.out",
//                     scrollTrigger: {
//                         trigger: '.image-box',
//                         start: 'top 80%',
//                         end: 'top 20%',
//                         scrub: 0.5,
//                     },
//                 }
//             );
//         });

//         return () => ctx.revert(); // پاکسازی انیمیشن هنگام خروج از صفحه
//     }, []);

//     return (
//         <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
//             <Box 
//                 className="image-box" 
//                 sx={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', opacity: 0 }}
//             >
//                 <img src={photo1} alt='herosection' />
//             </Box>
//         </Box>
//     );
// };

// export default HeroSection;
