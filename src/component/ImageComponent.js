import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material'; // اضافه کردن Grid
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageComponent = ({ photo1, photo2 }) => {
    useEffect(() => {
        // انیمیشن GSAP برای تصویر اول (برعکس)
        gsap.fromTo(
            '.image-box',
            {
                clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // حالت اولیه (پایین باز)
            },
            {
                clipPath: 'circle(50%)', // حالت نهایی (دایره‌ای جمع‌شده)
                duration: 1,
                scrollTrigger: {
                    trigger: '.image-box',
                    start: 'top 90%', // شروع انیمیشن
                    end: 'top 10%', // پایان انیمیشن
                    scrub: true,
                },
            }
        );
    }, []);


    return (
        <Grid container spacing={2} alignItems="center">
            {/* تصویر اول */}
            <Grid item md={6} sm={6} xs={12}>
                <Box className="image-box">
                    <img
                        src={photo1}
                        alt="Decorative"
                        style={{
                            width: '100%', // عرض تصویر
                            height: 'auto', // ارتفاع متناسب
                        }}
                    />
                </Box>
            </Grid>

            {/* تصویر دوم */}
            <Grid item md={6} sm={6} xs={12}>
                <Box>
                    <img
                        src={photo2}
                        alt="Decorative"
                        style={{
                            clipPath: 'polygon(25% 0%, 74% 21%, 99% 65%, 25% 100%, 0% 50%)', // برش تصویر دوم
                            width: '100%', // عرض تصویر
                            height: 'auto', // ارتفاع متناسب
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default ImageComponent;
