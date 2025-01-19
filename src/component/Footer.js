import { Stack, Typography, Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkerShare from "./LinkerShare";
import { isMobile } from "react-device-detect";
import Grid from '@mui/material/Grid2';
import photo from "../assets/svg/logo.jpg"



function Footer() {
  return (
    <footer>
      <Stack width={"100%"} m={0} p={3} backgroundColor={"black"}>
        <Grid container spacing={2} justifyContent="space-between">

          <Grid item xs={6} sm={6} md={6}>
            <Box
              component="img"
              src={photo}
              alt="logo"
              sx={{ width: "100px", height: "100px" , marginRight: "8px" }}

            />

            <Box display="flex" alignItems="center">
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
                  <Typography
                    sx={{
                      marginLeft: "20px",
                      color: "whitesmoke",
                      fontSize: isMobile ? 15 : 18,
                      fontFamily: "morabbaBold",
                    }}
                  >
                    تلفن تماس:
                  </Typography>
                  <Typography sx={{
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontSize: isMobile ? 15 : 18,
                    fontFamily: "morabbaBold",
                  }}>                  026-33515366
                  </Typography>
                </Box>


              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
                <Typography sx={{
                  marginLeft: "20px",
                  color: "whitesmoke",
                  fontSize: isMobile ? 15 : 18,
                  fontFamily: "morabbaBold",
                }}>
                  آدرس:
                </Typography>
                <Typography sx={{
                  marginLeft: "5px",
                  color: "whitesmoke",
                  fontSize: isMobile ? 15 : 18,
                  fontFamily: "morabbaBold",
                }}>                کرج، مهرویلا، میدان معلم، ساختمان اورانوس ،واحد16
                </Typography>
              </Box>


            </Box>
            <Box >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <MailIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
                <Typography sx={{
                  marginLeft: "20px",
                  color: "whitesmoke",
                  fontSize: isMobile ? 15 : 18,
                  fontFamily: "morabbaBold",
                }}>
                  ایمیل:
                </Typography>
                <Typography sx={{
                  marginLeft: "5px",
                  color: "whitesmoke",
                  fontSize: isMobile ? 15 : 18,
                  fontFamily: "morabbaBold",
                }}>
                  info@itols.ir
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TelegramIcon style={{ color: "orange", marginRight: "8px" }} fontSize="medium" />
                <Typography sx={{
                  marginLeft: "20px",
                  color: "whitesmoke",
                  fontSize: isMobile ? 15 : 18,
                  fontFamily: "morabbaBold",
                }}>
                  شبکه های اجتماعی
                </Typography>
              </Box>
              <LinkerShare showBox="true" sec="a" id="0" myLink="https://itols.ir" />
            </Box>
          </Grid>

          <Grid>

          </Grid>
        </Grid>
      </Stack>
    </footer>
  );
}

export default Footer;