import { Box, Divider, Drawer, FormControlLabel, IconButton, List, Stack, styled, Switch, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import MenuAccesItems from './menuAccessItem';
import menu from '../mock/menu';
import PublicMenu from '../mock/menu';
import ItolsLogo from '../assets/svg/logo.jpg'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { BaseColor } from './Tools';
import { useThemeMode } from './RTL';
import { useTheme } from '@mui/material/styles';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#aab4be',
                ...theme.applyStyles('dark', {
                    backgroundColor: '#8796A5',
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
        ...theme.applyStyles('dark', {
            backgroundColor: '#003892',
        }),
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
        ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
        }),
    },
}));
const Header = () => {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation()
    const [isLOggedIn, setIsloggedIn] = useState(false)
    const { toggleTheme, isDarkMode } = useThemeMode();
    const colors = BaseColor();
    const menuItmes = PublicMenu()
    useEffect(() => {
        const token = localStorage.getItem('auth')
        setIsloggedIn(!token)
    }, [])

    // const handleLogout = () => {
    //     localStorage.removeItem('auth');
    //     setIsloggedIn(false)
    // }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };
    const list = () => (
        <Box sx={{ width: '50vw' }} role="presentation" bgcolor={theme.palette.background.default} height={'100%'} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                <MenuAccesItems />
            </List>
            <Divider />
            <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} onClick={toggleTheme} checked={isDarkMode} />} />

        </Box>
    );
    return (
        <>
            <Drawer
                anchor={'right'}
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {list()}

            </Drawer>

            <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} px={1.5} pt={1} backgroundColor={theme.palette.background.paper} position={'sticky'} top={0} zIndex={1000}>

                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} height={50} py={2}>
                    {menuItmes.map(x => {
                        return (
                            <Link key={`menu_${x.id}`} to={x.link} role="button" aria-label={`menu-${x.title}`}>
                                <Typography component={'span'} sx={{ '&:hover': { color: colors.orange1, }, mx: 1.2, display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' }, cursor: "pointer" }} fontSize={13} color={x.link === location.pathname ? theme.palette.text.disabled : colors.text} >{x.title}</Typography>
                            </Link>

                        )
                    })}

                    <IconButton aria-label="Menu" sx={{ display: { xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block' } }} color='primary' size='large' onClick={e => { setDrawerOpen(true) }}>
                        <MenuOutlinedIcon fontSize='large' />
                    </IconButton>
                </Stack>

                <Stack display={'flex'} justifyContent={'space-between'} width={{ xl: '15%', lg: '20%', md: '25%', sm: '50%', xs: '60%' }} flexDirection={'row'}>
                    <Typography component={'a'} sx={{ display: 'flex', alignItems: 'center' }} href='tel:026-33515366'>026-33515366<PhoneIcon sx={{ ml: 0.5, color: colors.orange1 }} fontSize='medium' /></Typography>
                    <Typography component={'a'} sx={{ display: 'flex', alignItems: 'center' }} href='mailto:info@itols.ir'>info@itols.ir<MailIcon sx={{ ml: 0.5, color: colors.orange1 }} fontSize='medium' /></Typography>
                </Stack>

                <Stack direction={'row'} spacing={1}>
                    <Box sx={{ display: { xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none' } }} >
                        <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} onClick={toggleTheme} checked={isDarkMode} />} />

                    </Box>

                    <Link to={'/'}>
                        <img src={ItolsLogo} width={50} alt='LogoItols' style={{ filter: isDarkMode ? 'brightness(1) ' : 'brightness(0) grayscale(100%)' }} />

                    </Link>
                </Stack>

            </Stack>
        </>
    );
};

export default Header;