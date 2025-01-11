import React, { createContext, useEffect, useState } from 'react';
import { ThemeModeProvider } from './component/RTL';
import "./assets/css/Fonts.css";
import "./assets/css/custom.css";
import PublicRouts from './App/PublicRouts';
import { ToastContainer } from 'react-toastify';
import CustomSwitch from './App/CustomeSwitch';
import { BaseColor } from './component/Tools';
import { Box } from '@mui/material';
import { isMobile, MobileView } from 'react-device-detect';
import Home from './pages/Home/Home';
function App() {


    const [UserRole, setUserRole] = useState("publicUser");
    const [MyRout, setMyRout] = useState(<PublicRouts />);


    useEffect(() => {
        setMyRout(<PublicRouts />);
        setUserRole("publicUser");
    }, [])



    return (

        <ThemeModeProvider>
            <Box overflowX="hidden" backgroundColor={BaseColor.background} minHeight="100vh">

                <CustomSwitch>
                    {/* <Home />
                    <StoreSection /> */}
                    <PublicRouts />
                    {/* <GsapExample /> */}
                </CustomSwitch>
                {isMobile && (
                    <MobileView>
                        {/* <Navigations2 /> */}
                    </MobileView>
                )}
            </Box>
            <ToastContainer theme="colored" style={{ zIndex: 12000 }} />
        </ThemeModeProvider>

    );
}

export default App;
