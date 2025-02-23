import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, useTheme, Divider, IconButton } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '../../component/Layout';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MapComponent from '../../component/MapComponent';
import photo from "../../assets/svg/1.png"
import photo2 from "../../assets/svg/2.png"
import ImageComponent from '../../component/ImageComponent';

gsap.registerPlugin(ScrollTrigger);

const validationSchema = Yup.object({
    name: Yup.string().required('نام الزامی است'),
    email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
    content: Yup.string().required('محتوا الزامی است حداقل 50 کلمه است.').min(50, 'محتوا باید حداقل 50 کلمه باشد.'),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const ContactUsPage = () => {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Layout>

            <Box sx={{ mt: 10 }}>
                <Grid container spacing={3}>
                    {/* فرم تماس */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                borderRadius: '12px',
                                backgroundColor: theme.palette.background.paper,
                            }}
                        >
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    content: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    console.log(values);
                                }}
                            >
                                {({ handleChange, values, touched, errors }) => (
                                    <Form>
                                        <Typography variant="h6" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
                                            تماس با ما
                                        </Typography>

                                        <Field
                                            as={TextField}
                                            label="نام"
                                            name="name"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange}
                                            value={values.name}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />

                                        <Field
                                            as={TextField}
                                            label="ایمیل"
                                            name="email"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange}
                                            value={values.email}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                        />

                                        <Field
                                            as={TextField}
                                            label="محتوا"
                                            name="content"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            margin="normal"
                                            onChange={handleChange}
                                            value={values.content}
                                            error={touched.content && Boolean(errors.content)}
                                            helperText={touched.content && errors.content}
                                        />

                                        <FormControl sx={{ m: 1, width: 300 }}>
                                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                            <Select
                                                labelId="demo-multiple-checkbox-label"
                                                id="demo-multiple-checkbox"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput label="Tag" />}
                                                renderValue={(selected) => selected.join(', ')}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem key={name} value={name}>
                                                        <Checkbox checked={personName.includes(name)} />
                                                        <ListItemText primary={name} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>


                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 2 }}
                                        >
                                            ارسال
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Paper>
                    </Grid>

                    {/* بخش اطلاعات تماس */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                borderRadius: '12px',
                                backgroundColor: theme.palette.background.paper,
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                درباره ما
                            </Typography>
                            <Typography>
                                ما یک تیم حرفه‌ای هستیم که با ارائه خدمات با کیفیت، بهترین تجربه را برای مشتریانمان فراهم می‌کنیم.
                                هدف ما جلب رضایت مشتریان و ارائه راهکارهای نوین است.
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton sx={{ color: '#FFA500', mr: 2 }}>
                                        <CallIcon />
                                    </IconButton>
                                    <Typography>
                                        شماره تماس: 46110389 - 46110385 - 09123844102
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton sx={{ color: '#FFA500', mr: 2 }}>
                                        <EmailIcon />
                                    </IconButton>
                                    <Typography>
                                        ایمیل: ofoghvarzesharia@gmail.com
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton sx={{ color: '#FFA500', mr: 2 }}>
                                        <LocationOnIcon />
                                    </IconButton>
                                    <Typography>
                                        تهران بلوار آیت الله کاشانی- تقاطع جنت آباد جنوبی- جنب خیابان نیرو- ساختمان آتام- طبقه اول- واحد21
                                    </Typography>
                                </Box>
                                <Box>
                                    <ImageComponent photo1={photo} photo2={photo2}/>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: "5px" , borderRadius: '12px',}}>

                    <Paper

                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: '12px',
                            backgroundColor: theme.palette.background.paper,
                        }}>

                        <MapComponent />
                    </Paper>
                </Box>
            </Box>
        </Layout>
    );
};

export default ContactUsPage;