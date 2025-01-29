import React, { useRef } from "react";
import { gsap } from "gsap";
import { Box, Grid, Typography } from "@mui/material";
import AnimatedTitle from "../../component/AnimatedTitle";
import photo from "../../assets/svg/10.jpg";

const FloatingImage = () => {
    const handleMouseMove = (e, element) => {
        if (!element) return;

        const { clientX, clientY } = e;
        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = (element) => {
        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <Box
                    onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                    sx={{
                        width: "100%",
                        height: 500,
                        backgroundImage: `url(${photo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        perspective: 1000,
                        position: "relative",
                        border: "4px solid rgba(255, 255, 255, 0.5)",
                        transition: "border-color 0.3s ease",
                        "&:hover": {
                            borderColor: "rgba(255, 72, 0, 0.8)",
                            boxShadow: "0 30px 60px rgba(255, 0, 21, 0.4)",
                        },
                    }}
                >
                    <AnimatedTitle
                        title="افق ورزش آریا <br /> ورزشی برای همه"
                        containerStyles={{
                            color: "#fff",
                        }}
                        wordStyles={{
                            fontSize: "36px",
                            color: "#fff",
                        }}
                    />
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Grid container spacing={2} direction="column">
                    {[1, 2].map((item) => (
                        <Grid item key={item}>
                            <Box
                                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                                sx={{
                                    width: "100%",
                                    height: 250,
                                    backgroundImage: `url(${photo})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "16px",
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    perspective: 1000,
                                    position: "relative",
                                    border: "4px solid rgba(255, 255, 255, 0.5)",
                                    transition: "border-color 0.3s ease",
                                    "&:hover": {
                                        borderColor: "rgba(255, 72, 0, 0.8)",
                                        boxShadow: "0 30px 60px rgba(255, 0, 21, 0.4)",
                                    },
                                }}
                            >
                                <AnimatedTitle
                                    title="افق ورزش آریا <br /> ورزشی برای همه"
                                    containerStyles={{
                                        color: "#fff",
                                    }}
                                    wordStyles={{
                                        fontSize: "24px",
                                        color: "#fff",
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FloatingImage;
