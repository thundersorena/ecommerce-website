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
            <Box >
                <HeroSection />
            </Box>

            <Box sx={{ marginBottom: '40px', marginTop: '10px' }}>
                <Typography variant='h3' sx={{ textAlign: "center" }}>محصولات</Typography>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    pagination={{
                        type: "progressbar",
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
                            <SwiperSlide key={`sliderPic${index}`} style={{ height: '100%' }}>
                                <Link to={x?.link} style={{ height: '100%' }}>
                                    <Stack height={'100%'} position="relative">
                                        <img
                                            src={x?.image}
                                            alt={"درباره " + x.title}
                                            style={{
                                                objectFit: "contain",
                                                width: '100%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                display: 'flex',
                                                margin: 'auto',
                                            }}
                                        />
                                        {(x?.title || x?.description) && (
                                            <Stack position={'absolute'} bottom={0} right={0} width={'100%'}>
                                                <Paper sx={{ backgroundColor: '#FF9800' }}>
                                                    <Typography
                                                        sx={{ textAlign: "center" }}
                                                        color={"white"}
                                                        fontFamily={'morabbaBold'}
                                                    >
                                                        <InventoryIcon sx={{ mr: 0.7 }} />
                                                        {x?.title?.slice(0, 3)}
                                                    </Typography>
                                                </Paper>
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
                            md={4}
                            sm={4}
                            xs={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
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




            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Box sx={{ width: '100%' }}>
                        <img src={photo} alt="placeholder" style={{ width: '100%' }} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ textAlign: "center" }} variant="h4">
                        خوش آمدید
                    </Typography>
                    <Divider sx={{ m: 5 }} />
                    <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
                        libero et aliquet aliquet, ligula nisl tincidunt purus, ac lacinia nunc nisl a justo.
                        Nullam auctor, libero et aliquet aliquet.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'left', mb: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
                        libero et aliquet aliquet, ligula nisl tincidunt purus, ac lacinia nunc nisl a justo.
                        Nullam auctor, libero et aliquet aliquet.
                    </Typography>

                    <Box
                        sx={{
                            position: 'relative',
                            height: '30vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            pb: 2,
                        }}
                    >
                        <Button
                            sx={{
                                textAlign: "center",
                                justifyContent: "center",
                            }}
                            variant="contained"
                            disableElevation
                        >
                            اینجا کلیک کنید
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Box my={2} px={2} py={2} display={'flex'} alignItems={'center'} style={{ zIndex: 450 }}>
                <Stack width={'100%'} direction={'column'}>
                    <Link to={'/Store'}>
                        <Typography
                            fontFamily={'morabbaBlack'}
                            fontSize={24}
                            display={'inline'}
                            color={colors.text}
                        >
                            نمونه کارها
                        </Typography>
                        <Typography
                            fontSize={13}
                            display={'inline'}
                            sx={{ ml: 1 }}
                            color={colors.orange1}
                        >
                            مشاهده‌همه
                        </Typography>
                    </Link>

                    <Grid container spacing={2}>
                        {products?.length ? (
                            <>
                                {products?.slice(0, 5)?.map((x, index) => (
                                    <Grid key={`Store-${index}`} item xl={2} lg={3} md={3} sm={4} xs={4}>
                                        <Box>
                                            <img
                                                src={x?.image}
                                                alt={"درباره " + x.title}
                                                style={{
                                                    objectFit: "cover",
                                                    width: '100%',
                                                    height: '50%',
                                                    justifyContent: 'center',
                                                    display: 'flex',
                                                    margin: 'auto',
                                                }}
                                            />
                                            <Typography
                                                sx={{ textAlign: 'center' }}
                                                fontFamily={'morabbaBold'}
                                            >
                                                {x.title.slice(0, 3)}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}

                                <Grid item xl={2} lg={3} md={3} sm={4} xs={4}>
                                    <Link to="/Store">
                                        <Box
                                            width={'100%'}
                                            minHeight={100}
                                            height={'80%'}
                                            borderRadius={3}
                                            bgcolor={'gray'}
                                            display={'flex'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <Typography color={'whitesmoke'}>مشاهده همه {'>'}</Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            </>
                        ) : (
                            Array.from({ length: 10 }).map((_, index) => (
                                <Grid key={`Store-${index}`} item xl={2} lg={3} md={3} sm={4} xs={4}>
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
