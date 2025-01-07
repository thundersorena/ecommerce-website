import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../api/AllApi';
import { Box, CircularProgress, Paper, Typography, TextField, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../../component/Layout';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#333',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#FF9800',
        color: '#fff',
    },
}));

function StoreSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('newest'); 

    const GetProducts = async () => {
        try {
            setLoading(true);
            const response = await getAllProducts();
            setProducts(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        GetProducts();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleSortOrder = (event) => {
        setSortOrder(event.target.value);
    };

    // فیلتر و مرتب‌سازی محصولات
    const filteredProducts = products
        .filter((product) => product.title.toLowerCase().includes(searchQuery)) // فیلتر براساس جستجو
        .sort((a, b) => {
            if (sortOrder === 'newest') {
                return new Date(b.created_at) - new Date(a.created_at);
            } else {
                return new Date(a.created_at) - new Date(b.created_at);
            }
        });

    if (loading) {
        return (
            <Box
                sx={{
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    height: "100vh",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error" variant="h5">{error}</Typography>;
    }

    return (
        <Layout>
            <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* فیلد جستجو */}
                <TextField
                    label="جستجوی محصول"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearch}
                    sx={{ width: '45%' }}
                />

                {/* فیلتر مرتب‌سازی */}
                <Select
                    value={sortOrder}
                    onChange={handleSortOrder}
                    displayEmpty
                    sx={{ width: '45%' }}
                >
                    <MenuItem value="newest">جدیدترین</MenuItem>
                    <MenuItem value="oldest">قدیمی‌ترین</MenuItem>
                </Select>
            </Box>

            <Box sx={{ width: "100%", minHeight: 829, padding: '20px', backgroundColor: '#F5F5F5' }}>
                <Masonry columns={3} spacing={2}>
                    {filteredProducts?.length === 0 ? (
                        <Typography variant="h5" textAlign="center" color="textSecondary">
                            محصولی یافت نشد
                        </Typography>
                    ) : (
                        filteredProducts.map((x, index) => (
                            <Link to={`/ProductDetail/${x.id}`} key={index}>
                                <Box
                                    sx={{
                                        overflow: 'hidden',
                                        borderRadius: '16px',
                                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    <Label>{x.title.slice(0, 3)}</Label>
                                    <img
                                        srcSet={x?.image}
                                        src={x?.image}
                                        alt={x?.title}
                                        loading="lazy"
                                        style={{
                                            borderBottomLeftRadius: 16,
                                            borderBottomRightRadius: 16,
                                            display: 'block',
                                            width: '100%',
                                            objectFit: 'cover',
                                            maxHeight: '200px',
                                        }}
                                    />
                                </Box>
                            </Link>
                        ))
                    )}
                </Masonry>
            </Box>
        </Layout>
    );
}

export default StoreSection;
