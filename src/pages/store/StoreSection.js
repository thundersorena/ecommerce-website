import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../api/AllApi';
import { Box, CircularProgress, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../../component/Layout';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function StoreSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

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

    const handleOpen = () => {
        setOpen(true);
        // Simulate fetching data
        setLoading(true);
        setTimeout(() => {
            setOptions([...products]); // Replace with actual data
            setLoading(false);
        }, 1000);
    };

    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };

    if (loading) {
        return <Box sx={{ alignItems: "center", textAlign: "center", justifyContent: "center", display: "flex", height: "100vh" }}><CircularProgress /></Box>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Layout>
            <Autocomplete
                sx={{ width: 300 }}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Asynchronous"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            },
                        }}
                    />
                )}
            />
            <Box sx={{ width: "100%", minHeight: 829 }}>
                <Masonry columns={3} spacing={2}>
                    {products?.length === 0 ? <h1>No products available</h1> :
                        products.map((x, index) => (
                            <Link to={`/ProductDetail/${x.id}`} key={index}>
                                <div key={index}>
                                    <Label>{x.title.slice(0, 3)}</Label>
                                    <img
                                        srcSet={x?.image}
                                        src={x?.imgage}
                                        alt={x?.title}
                                        loading="lazy"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderBottomRightRadius: 4,
                                            display: 'block',
                                            width: '100%',
                                        }}
                                    />
                                </div>
                            </Link>
                        ))}
                </Masonry>
            </Box>


        </Layout>
    );
}

export default StoreSection;
