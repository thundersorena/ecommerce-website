import React, { useState, useEffect } from 'react';
import Layout from '../component/Layout';
import { Navigation, Autoplay } from 'swiper/modules';
import { getAllProducts } from '../api/AllApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import { CircularProgress, Skeleton, Typography, Box, Paper, Stack, Grid, Button, Divider } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import photo from "../assets/svg/6.jpg"
import { BaseColor } from '../component/Tools';
import HeroSection from './HeroSection';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState({});
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const colors = BaseColor();
    const GetProduct = async () => {
        setIsLoading(true);
        try {
            const data = await getAllProducts();
            setProducts(data);
        } catch (err) {
            setError("Error fetching products!");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        GetProduct();
    }, []);

    if (loading) {
        return <Box sx={{ alignItems: "center", textAlign: "center", justifyContent: "center", display: "flex", height: "100vh" }}><CircularProgress /></Box>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Layout FullWidth={true}>

            <Box>
                <HeroSection />
            </Box>

            <Box sx={{ marginBottom: '40px', marginTop: '10px' }}>
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'iranSansBold',
                        background: 'linear-gradient(90deg, #4caf50, #81c784)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        mb: 2,
                    }}
                >
                    محصولات
                </Typography>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    pagination={{
                        type: 'progressbar',
                        clickable: true,
                    }}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={true}
                    style={{ height: '50vh' }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {products?.length ? (
                        products.map((x, index) => (
                            <SwiperSlide
                                key={`sliderPic${index}`}
                                style={{
                                    height: '100%',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                <Link to={x?.link} style={{ height: '100%' }}>
                                    <Stack height={'100%'} position="relative">
                                        <img
                                            src={x?.image}
                                            alt={'درباره ' + x.title}
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%',
                                                height: '50%',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                margin: 'auto',
                                                transition: 'transform 0.3s ease-in-out',
                                            }}
                                        />
                                        {(x?.title || x?.description) && (
                                            <Stack
                                                position={'absolute'}
                                                bottom={0}
                                                right={0}
                                                width={'100%'}
                                                sx={{
                                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                                    padding: '10px',
                                                    textAlign: 'center',
                                                    color: 'white',
                                                    backdropFilter: 'blur(10px)',
                                                }}
                                            >
                                                <Typography
                                                    color="white"
                                                    sx={{ fontFamily: 'morabbaBold', fontSize: '16px' }}
                                                >
                                                    <InventoryIcon sx={{ mr: 0.7 }} />
                                                    {x?.title?.slice(0, 3)}
                                                </Typography>
                                            </Stack>
                                        )}
                                    </Stack>
                                </Link>
                            </SwiperSlide>
                        ))
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '35vh',
                            }}
                        >
                            <Skeleton variant="rounded" height={200} width="100%" />
                        </Box>
                    )}
                </Swiper>
            </Box>

            <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 5 }}>
                {products?.length
                    ? products.slice(0, 8).map((product, index) => (
                        <Grid
                            key={`Store-${index}`}
                            item
                            xl={3}
                            lg={3}
                            md={3}
                            sm={3}
                            xs={3}
                            style={{ display: "flex", justifyContent: "center" }}
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
                    : null}
            </Grid>




            <Box
                my={2}
                px={2}
                py={4}
                display={'flex'}
                alignItems={'center'}
                style={{ zIndex: 450 }}
                sx={{
                    backgroundColor: '#F5F5F5', // پس‌زمینه ملایم
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)', // سایه برای برجسته‌کردن
                    borderRadius: '16px', // گوشه‌های گرد
                }}
            >
                <Stack width={'100%'} direction={'column'} spacing={2}>
                    <Link to={'/Store'}>
                        <Typography
                            fontFamily={'morabbaBlack'}
                            fontSize={24}
                            display={'inline'}
                            color={'#333'}
                            sx={{
                                textAlign: 'center',
                                '&:hover': {
                                    color: '#809D3C', // رنگ تغییر در هنگام هاور
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            نمونه کارها
                        </Typography>
                        <Typography
                            fontSize={13}
                            display={'inline'}
                            sx={{ ml: 1, color: '#FF9800' }}
                        >
                            مشاهده‌همه
                        </Typography>
                    </Link>

                    <Grid container spacing={3}>
                        {products?.length ? (
                            <>
                                {products?.slice(0, 5)?.map((x, index) => (
                                    <Grid
                                        key={`Store-${index}`}
                                        item
                                        xl={2}
                                        lg={3}
                                        md={4}
                                        sm={6}
                                        xs={12}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderRadius: '12px',
                                                boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
                                                '&:hover img': {
                                                    transform: 'scale(1.1)', // افکت بزرگنمایی روی تصویر
                                                },
                                                '&:hover .title-overlay': {
                                                    opacity: 1,
                                                    transform: 'translateY(0)', // نمایش عنوان با انیمیشن
                                                },
                                            }}
                                        >
                                            <img
                                                src={x?.image}
                                                alt={'درباره ' + x.title}
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: '200px',
                                                    transition: 'all 0.3s ease',
                                                }}
                                            />
                                            <Typography
                                                className="title-overlay"
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: '10%',
                                                    left: '5%',
                                                    transform: 'translateY(50%)',
                                                    color: '#fff',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                                    padding: '6px 12px',
                                                    borderRadius: '8px',
                                                    fontSize: '14px',
                                                    textAlign: 'center',
                                                    opacity: 0,
                                                    transition: 'all 0.3s ease-in-out',
                                                }}
                                            >
                                                {x.title.slice(0, 3)}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}

                                <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                                    <Link to="/Store">
                                        <Box
                                            sx={{
                                                width: '100%',
                                                minHeight: 150,
                                                height: '100%',
                                                borderRadius: '12px',
                                                backgroundColor: '#809D3C',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                '&:hover': {
                                                    backgroundColor: '#A9C46C', // تغییر رنگ در هاور
                                                },
                                            }}
                                        >
                                            <Typography>مشاهده همه {'>'}</Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            </>
                        ) : (
                            Array.from({ length: 5 }).map((_, index) => (
                                <Grid key={`Store-${index}`} item xl={2} lg={3} md={4} sm={6} xs={12}>
                                    <Skeleton variant="rounded" height={150} />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Stack>
            </Box>

        </Layout>
    );
};

export default Home;
