import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { Navigation, Autoplay } from 'swiper/modules';
import { getAllProducts } from '../../api/AllApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import { CircularProgress, Skeleton, Typography, Box, Paper, Stack, Grid, Button, Divider } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { BaseColor } from '../../component/Tools';
import HeroSection from '../Home/HeroSection';
import GSAPExample from '../Home/GSAPExample';
import FloatingImage from '../Home/Story';
import PhotoSection from '../Home/PhotoSection';
import AnimatedTitle from '../../component/AnimatedTitle';

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


            {/* <Box>
                <PhotoSection />
            </Box> */}

            <Paper
                sx={{
                    marginBottom: '40px',
                    marginTop: '10px',
                    padding: { xs: '10px', sm: '20px', md: '30px' },
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.27)',
                    borderRadius: '12px',
                }}
            >
                <Typography
                    variant="h3">
                    <AnimatedTitle
                        title="محصولات"
                        containerStyles={{
                            color: "#ff0310",
                        }}
                        wordStyles={{
                            fontSize: "36px",
                            color: "#fc0000",
                        }}
                    />
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
                    style={{ height: '40vh' }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 5 },
                        640: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
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
                                    // boxShadow: '0 8px 15px hsla(357, 100.00%, 50.60%, 0.20)',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <Link to={x?.link} style={{ height: '100%', textDecoration: 'none' }}>
                                    <Stack height={'100%'} position="relative">
                                        <img
                                            src={x?.image}
                                            alt={'درباره ' + x.title}
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%',
                                                height: '50%',
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
                                                    padding: { xs: '8px', sm: '10px', md: '15px' },
                                                    textAlign: 'center',
                                                    color: 'white',
                                                    backdropFilter: 'blur(10px)',
                                                }}
                                            >
                                                <Typography
                                                    color="white"
                                                    sx={{
                                                        fontFamily: 'morabbaBold',
                                                        fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                                    }}
                                                >
                                                    <InventoryIcon sx={{ mr: 0.7 }} />
                                                    {x?.title?.slice(0, 15)}
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
            </Paper>



            <Box>
                <GSAPExample />
            </Box>



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
                                        sm={4}
                                        xs={6}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderRadius: '16px',
                                                boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15)',
                                                transition: 'all 0.4s ease',
                                                '&:hover img': {
                                                    transform: 'scale(1.2)',
                                                    filter: 'brightness(80%)', // تغییر روشنایی در هاور
                                                },
                                                '&:hover .info-overlay': {
                                                    opacity: 1,
                                                    bottom: '10%', // نمایش اطلاعات با انیمیشن
                                                },
                                            }}
                                        >
                                            <img
                                                src={x?.image}
                                                alt={'درباره ' + x.title}
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                    height: '220px',
                                                    transition: 'all 0.4s ease',
                                                }}
                                            />
                                            <Box
                                                className="info-overlay"
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: '-20%',
                                                    left: '5%',
                                                    right: '5%',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                    borderRadius: '12px',
                                                    padding: '12px',
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    opacity: 0,
                                                    transition: 'all 0.4s ease',
                                                }}
                                            >
                                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                    {x.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ margin: '8px 0' }}>
                                                    قیمت: {x.price} تومان
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    sx={{ borderRadius: '20px', padding: '4px 12px' }}
                                                >
                                                    افزودن به سبد خرید
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                                <Grid item xl={2} lg={3} md={4} sm={4} xs={6}>
                                    <Link to="/Store">
                                        <Box
                                            sx={{
                                                width: '100%',
                                                minHeight: 180,
                                                height: '100%',
                                                borderRadius: '16px',
                                                backgroundColor: '#0066CC',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                '&:hover': {
                                                    backgroundColor: '#0052A3', // تغییر رنگ در هاور
                                                    transform: 'scale(1.05)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            <Typography>مشاهده همه محصولات {'>'}</Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            </>
                        ) : (
                            Array.from({ length: 5 }).map((_, index) => (
                                <Grid key={`Store-${index}`} item xl={2} lg={3} md={4} sm={6} xs={12}>
                                    <Skeleton
                                        variant="rectangular"
                                        height={180}
                                        sx={{
                                            borderRadius: '12px',
                                            backgroundColor: '#f0f0f0',
                                            animation: 'pulse 2s infinite',
                                        }}
                                    />
                                </Grid>
                            ))
                        )}
                    </Grid>


                </Stack>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    margin: 0,
                    padding: 0,
                }}
            >
                <FloatingImage />
            </Box>


        </Layout>
    );
};

export default Home;
