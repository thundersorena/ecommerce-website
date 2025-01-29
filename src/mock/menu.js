import { useContext } from 'react';
import { FdContext } from '../App';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';

const PublicMenu = () => [

    { id: 1, title: 'خانه', link: '/', active: true, icon: <HomeRoundedIcon />, },
    { id: 2, title: 'فروشگاه', link: "/Store", active: true, icon: <HomeRepairServiceRoundedIcon />, },
    { id: 7, title: 'تماس‌با‌ما', link: '/ContactUs', active: true, icon: <AddIcCallRoundedIcon />, },
    { id: 7, title: 'مقالات', link: '/ContactUs', active: true, icon: <AddIcCallRoundedIcon />, },


]

export default PublicMenu;
