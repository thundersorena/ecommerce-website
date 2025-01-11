import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Typography } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerStyles, wordStyles, subtitle }) => {
    const containerRef = useRef(null);

    useEffect(() => {

        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                },
            });

            titleAnimation.to(
                ".animated-word",
                {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                    ease: "power2.inOut",
                    stagger: 0.05,
                },
                0
            );

            // انیمیشن زیرعنوان
            if (subtitle) {
                titleAnimation.to(
                    ".animated-subtitle",
                    {
                        opacity: 1,
                        y: 0,
                        ease: "power2.out",
                    },
                    0.5
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, [subtitle]);

    return (
        <Box
            ref={containerRef}
            sx={{
                textAlign: "center",
                py: 4,
                ...containerStyles,
            }}
        >
            {title?.split("<br />").map((line, index) => (
                <Box
                    key={index}
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={1}
                >
                    {line.split(" ").map((word, idx) => (
                        <Typography
                            key={idx}
                            className="animated-word"
                            component="span"
                            dangerouslySetInnerHTML={{ __html: word }}
                            sx={{
                                opacity: 0,
                                transform: "translate3d(0, 20px, 0) rotateY(30deg) rotateX(10deg)",
                                fontWeight: "bold",
                                fontSize: "24px",
                                color: "primary.main",
                                ...wordStyles,
                            }}
                        />
                    ))}
                </Box>
            ))}

            {/* زیرعنوان */}
            {subtitle && (
                <Typography
                    className="animated-subtitle"
                    sx={{
                        opacity: 0,
                        transform: "translateY(20px)",
                        fontSize: "16px",
                        color: "text.secondary",
                        mt: 2,
                        transition: "all 0.3s ease-in-out",
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
};

export default AnimatedTitle;
