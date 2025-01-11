import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from "../../assets/svg/10.jpg";

gsap.registerPlugin(ScrollTrigger);

const PhotoSection = () => {
    useEffect(() => {
        // تعریف انیمیشن GSAP با ScrollTrigger
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip", // عنصر هدف
                start: "top center", // شروع انیمیشن
                end: "+=800 center", // پایان انیمیشن
                scrub: 0.3, // اسکراب برای روان‌تر شدن
                pin: true, // ثابت کردن عنصر
                pinSpacing: true, // فاصله‌گذاری بعد از پین کردن
            },
        });

        // انیمیشن تغییر اندازه و گوشه‌ها
        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            duration: 1.5, // مدت زمان کوتاه‌تر
            ease: "power1.inOut", // روان‌تر کردن انیمیشن
        });

        // پاک‌سازی انیمیشن هنگام خروج
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Box
            id="about"
            sx={{
                minHeight: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
            }}
        >
            <Box
                id="clip"
                sx={{
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    className="mask-clip-path"
                    sx={{
                        width: "50vw", 
                        height: "50vh", 
                        overflow: "hidden",
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.5s ease-in-out",
                    }}
                >
                    <img
                        src={photo}
                        alt="Background"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PhotoSection;
