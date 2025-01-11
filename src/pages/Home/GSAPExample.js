import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Typography, Grid } from "@mui/material";
import { getAllProducts } from "../../api/AllApi";

gsap.registerPlugin(ScrollTrigger); // ثبت پلاگین ScrollTrigger

const ScrollAnimation = () => {
    const [products, setProducts] = useState([]); // ذخیره محصولات
    const [loading, setIsLoading] = useState(false); // وضعیت بارگذاری
    const [error, setError] = useState(null); // ذخیره خطاها
    const refs = useRef([]); // برای ذخیره رفرنس‌های هر محصول

    // دریافت محصولات از API
    const GetProduct = async () => {
        setIsLoading(true);
        try {
            const data = await getAllProducts(); // فرض کنید این تابع محصولات را از API می‌گیرد
            setProducts(data);
        } catch (err) {
            setError("Error fetching products!");
        } finally {
            setIsLoading(false);
        }
    };

    // بارگذاری محصولات هنگام رندر کامپوننت
    useEffect(() => {
        GetProduct();
    }, []);

    // اعمال انیمیشن به کارت‌ها با GSAP
    useEffect(() => {
        if (products.length > 0) {
            refs.current.forEach((ref, index) => {
                if (ref) {
                    gsap.fromTo(
                        ref,
                        { opacity: 0, y: 50 }, // حالت اولیه
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.2,
                            ease: "power2.out",
                            delay: index * 0.1, // تأخیر برای هر کارت
                            scrollTrigger: {
                                trigger: ref, // عنصر هدف
                                start: "top 80%", // نقطه شروع
                                toggleActions: "play reset play reset",

                            },
                        }
                    );
                }
            });
        }
    }, [products]);

    return (
        <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 5 }}>
            {products?.length ? (
                products.slice(0, 8).map((product, index) => (
                    <Grid
                        key={`Store-${index}`}
                        item
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                        style={{ display: "flex", justifyContent: "center" }}
                        ref={(el) => (refs.current[index] = el)} // ذخیره رفرنس
                    >
                        <Box
                            sx={{
                                width: "180px",
                                height: "180px",
                                borderRadius: "50%",
                                backgroundColor: "#f5f5f5",
                                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.56)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "pointer",
                                "&:hover .hover-title": {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                },
                            }}
                        >
                            <img
                                src={product?.image || "https://via.placeholder.com/150"}
                                alt={product?.title?.slice(0, 3) || "placeholder"}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                }}
                            />
                            <Typography
                                className="hover-title"
                                sx={{
                                    position: "absolute",
                                    bottom: "10%",
                                    left: "5%",
                                    transform: "translate(-100%, 0px)",
                                    color: "#fff",
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    padding: "6px 12px",
                                    borderRadius: "12px",
                                    fontSize: "14px",
                                    textAlign: "center",
                                    opacity: 0,
                                    transition: "all 0.3s ease-in-out",
                                }}
                            >
                                {product?.title || "Product Title"}
                            </Typography>
                        </Box>
                    </Grid>
                ))
            ) : loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <Typography>No products available</Typography>
            )}
        </Grid>
    );
};

export default ScrollAnimation;
