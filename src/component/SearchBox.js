import { Box, Input, Modal, Stack, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { getAllProducts } from '../api/AllApi';
import gsap from 'gsap';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useTheme } from '@mui/material/styles';

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const theme = useTheme(); 
    const modalRef = useRef(null);
    const searchIconRef = useRef(null);

    const GetProducts = async () => {
        try {
            setLoading(true);
            const response = await getAllProducts();
            setProducts(response);
        } catch (error) {
            setError(error.message || "خطا در دریافت محصولات");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        GetProducts();
    }, []);

    const handleChange = (event) => {
        setSearch(event.target.value.toLowerCase());
    };

    const filterSearch = search
        ? products.filter((product) =>
            product.title.toLowerCase().includes(search)
        )
        : products;

    const handleModalToggle = () => {
        setOpen(!open);
        if (!open) {
            gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 });
        }
    };

    const handleSearchIconAnimation = () => {
        gsap.to(searchIconRef.current, { rotation: 360, scale: 1.2, duration: 0.5 });
        setTimeout(() => {
            gsap.to(searchIconRef.current, { rotation: 0, scale: 1, duration: 0.5 });
        }, 500);
    };

    return (
        <Box>
            <Typography
                variant="button"
                sx={{ cursor: "pointer", color: "blue" }}
                onClick={() => { handleModalToggle(); handleSearchIconAnimation(); }}
            >
                <Box
                    sx={{
                        display: "inline-block",
                        position: "relative",
                        animation: "none",
                    }}
                    ref={searchIconRef}
                >
                    <SearchIcon fontSize="large" sx={{ color: "orange", bgcolor: theme.palette.background }} />
                </Box>
            </Typography>

            <Modal open={open} onClose={handleModalToggle}>
                <Box
                    ref={modalRef}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "70%",
                        maxHeight: "80vh",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: "1rem",
                        overflow: "auto",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{
                            alignItems: "center",
                            borderRadius: "1.5rem",
                            padding: "0.8rem 1.2rem",
                            marginBottom: "2rem",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                            bgcolor: "background.paper",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.25)",
                            },
                        }}
                    >
                        <SearchIcon
                            fontSize="large"
                            sx={{
                                color: "orange",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "rotate(15deg) scale(1.1)",
                                },
                            }}
                        />
                        <Input
                            type="text"
                            name="searchBox"
                            placeholder="جستجو کنید"
                            onChange={handleChange}
                            value={search}
                            fullWidth
                            disableUnderline
                            sx={{
                                fontSize: "1rem",
                                padding: "0.5rem",
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                borderRadius: "1rem",
                                bgcolor: "background.default",
                                "&::placeholder": {
                                    color: "gray",
                                    fontStyle: "italic",
                                },
                                "&:focus": {
                                    borderColor: "orange",
                                    boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.5)",
                                },
                            }}
                        />
                    </Stack>


                    {loading && <Typography>در حال بارگذاری...</Typography>}
                    {error && <Typography color="error">{error}</Typography>}
                    {!loading && !error && (
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 2,
                                justifyContent: "center",
                            }}
                        >
                            {filterSearch.length > 0 ? (
                                filterSearch.map((product) => (
                                    <Link
                                        to={`/ProductDetail/${product.id}`}
                                        key={product.id}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Box
                                            sx={{
                                                width: "150px",
                                                height: "200px",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                borderRadius: "8px",
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                                overflow: "hidden",
                                                bgcolor: "background.default",
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                "&:hover": {
                                                    transform: "scale(1.05)",
                                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                                                },
                                            }}
                                        >
                                            <img
                                                srcSet={product?.image}
                                                src={product?.image}
                                                alt={product?.title}
                                                loading="lazy"
                                                style={{
                                                    width: "100%",
                                                    height: "70%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: "0.9rem",
                                                    fontWeight: 500,
                                                    textAlign: "center",
                                                    p: 1,
                                                }}
                                            >
                                                {product.title}
                                            </Typography>
                                        </Box>
                                    </Link>
                                ))
                            ) : (
                                <Typography>محصولی یافت نشد.</Typography>
                            )}
                        </Box>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default SearchBox;
