import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { BaseColor } from './Tools';
import Header from './Header';
import Footer from "./Footer"

export default function Layout({ children, FullWidth = false }) {


    return (
        <Box m={0} p={0}  >
            <Header />
            <Box display={'flex'} justifyContent={'center'} overflow={'hidden'}>
                <Container maxWidth={FullWidth ? 'xl' : 'lg'} component={'main'} sx={{ px: { md: 2, xs: 0 }, m: 0, pt: 2, pb: 2, }}>
                    <Box backgroundColor={BaseColor.background} minHeight={'90vh'} width={'100%'} overflow={'hidden'} p={isMobile ? 0.6 : 0}>
                        {children}
                    </Box>
                </Container>

            </Box>
            <Footer />

        </Box>

    )
}