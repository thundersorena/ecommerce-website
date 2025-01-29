import React, { useState } from "react";
import { Box, Grid, Stack, Typography, TextField, Button, InputAdornment, Link, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import PublicMenu from "../mock/menu";
import logo from "../assets/svg/logo.jpg"
import { BaseColor } from "./Tools";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ایمیل ارسال شد:", email);
    // اینجا می‌تونید کد ارسال ایمیل به بک‌اند رو اضافه کنید
  };

  const menuItems = PublicMenu();

  return (
    <footer>
      <Stack width="100%" m={0} p={3} sx={{ backgroundColor: "black", color: "whitesmoke" }}>
        <Grid container spacing={3} justifyContent="space-around">
          {/* ستون اطلاعات تماس */}
          <Grid item xs={12} sm={6} md={4}>
            <Box component="img" src={logo} alt="logo" sx={{ width: 150, height: 150, mb: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon style={{ color: "orange" }} />
              <Typography sx={{ ml: 1 }}>تلفن تماس: 026-33515366</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon style={{ color: "orange" }} />
              <Typography sx={{ ml: 1 }}>کرج، مهرویلا، میدان معلم، ساختمان اورانوس، واحد 16</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <MailIcon style={{ color: "orange" }} />
              <Typography sx={{ ml: 1 }}>info@itols.ir</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TelegramIcon style={{ color: "orange" }} />
              <Typography sx={{ ml: 1 }}>شبکه‌های اجتماعی</Typography>
            </Box>
          </Grid>

          {/* ستون لینک‌های مرتبط */}
          <Grid item xs={12} sm={6} md={4}>
  <Typography 
    sx={{ 
      fontSize: 18, 
      mb: 2, 
      fontWeight: "bold", 
      color: "whitesmoke", 
      textAlign: "center" // وسط چین کردن عنوان
    }}
  >
    لینک‌های مرتبط
  </Typography>
  <Box 
    sx={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", // لینک‌ها وسط چین شوند
      gap: 1.5, 
      p: 2, 
      borderRadius: "10px", 
    }}
  >
    {menuItems.map((item) => (
      <Link 
        key={item.id} 
        href={item.link} 
        sx={{  
          color: "whitesmoke", 
          textDecoration: "none", 
          fontSize: 16, 
          transition: "0.3s",
          textAlign: "center", // اطمینان از وسط‌چین بودن متن
          "&:hover": { color: "orange", textDecoration: "underline" }
        }}
      >
        {item.title}
      </Link>
    ))}
  </Box>
</Grid>


          {/* ستون فرم ارتباط */}
          <Grid item xs={12} sm={12} md={4}>
            <Typography sx={{ fontSize: 18, mb: 2, fontWeight: "bold" }}>با ما در ارتباط باشید</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                maxWidth: 400,
                mx: "auto",
                mt: 5,
                borderRadius:"50%",

              }}
            >
              <TextField
                label="ایمیل"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                ارسال
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </footer>
  );
};

export default Footer;
