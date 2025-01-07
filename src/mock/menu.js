import { useContext } from 'react';
import { FdContext } from '../App';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const PublicMenu = () => [


    { id: 1, title: 'خانه', link: '/', active: true, icon: <HomeRoundedIcon />, },
    { id: 2, title: 'فروشگاه', link: "/Store", active: true, icon: <HomeRepairServiceRoundedIcon />, },
    { id: 3, title: 'محصولات', link: '/Products', active: true, icon: <PrecisionManufacturingIcon />, },
    // { id: 4, title: 'نمونه‌کار', link: '/WorkSamples', active: true, icon: <InventoryIcon />, },
    // { id: 5, title: 'مشتریان', link: '/Customers', active: true, icon: <ApartmentRoundedIcon />, },
    // { id: 6, title: 'مقالات', link: '/Blogs', active: true, icon: <BookRoundedIcon />, },
    { id: 7, title: 'تماس‌با‌ما', link: '/ContactUs', active: true, icon: <AddIcCallRoundedIcon />, },


]

export default PublicMenu;
