import { Stack, Typography, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkerShare from "./LinkerShare";
import { isMobile } from "react-device-detect";
import Grid from '@mui/material/Grid2';



function Footer() {
  return (
    <footer>
      <Stack width={"100%"} m={0} p={3} backgroundColor={"black"}>
        <Grid container spacing={2} justifyContent="space-between">
          {/* Phone Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Box display="flex" alignItems="center">
              <PhoneIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
              <Box>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18} fontFamily={"morabbaBold"}>
                  تلفن تماس
                </Typography>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18}>
                  026-33515366
                </Typography>

              </Box>
            </Box>
          </Grid>

          {/* Address Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Box display="flex" alignItems="center">
              <LocationOnIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
              <Box>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18} fontFamily={"morabbaBold"}>
                  آدرس
                </Typography>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18}>
                  کرج، مهرویلا، میدان معلم، ساختمان اورانوس ،واحد16
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Email Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Box display="flex" alignItems="center">
              <MailIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
              <Box>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18} fontFamily={"morabbaBold"}>
                  ایمیل
                </Typography>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18}>
                  info@itols.ir
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Box display="flex" alignItems="center">
              <TelegramIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
              <Box>
                <Typography sx={{ color: "whitesmoke" }} fontSize={isMobile ? 15 : 18} fontFamily={"morabbaBold"}>
                  شبکه های اجتماعی
                </Typography>
                <LinkerShare showBox="true" sec="a" id="0" myLink="https://itols.ir" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </footer>
  );
}

export default Footer;