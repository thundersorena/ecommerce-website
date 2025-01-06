import { Box, IconButton, InputAdornment, OutlinedInput, Stack, Tooltip, Typography, SvgIcon, } from "@mui/material";
import React, { useEffect, useState } from "react";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import { isMobile } from "react-device-detect";
import { notify } from "./notify";
// import EittaPhoto from "../assets/svg/eitaa-.svg";
import ShareIcon from '@mui/icons-material/Share';
const LinkerShare = ({
    sec = "a",
    id = "0",
    myLink = "",
    showBox = "false",
}) => {
    const [link, setLink] = useState("");
    useEffect(() => {
        setLink(`https://itols.ir/a${sec}${id}`);
    }, [id, sec]);
    const setClipboard = () => {
        navigator.clipboard.writeText(link);
        notify("در حافظه کپی شد", "info");
    };
    return (

        <Stack m={2}>
            {showBox === "false" ? (
                <Box>
                    <Typography fontSize={isMobile ? 9 : 11}>لینک کوتاه</Typography>
                    <OutlinedInput
                        size="small"
                        value={link}
                        sx={{ border: "1px solid white", width: "100%", "& input": { textAlign: "right" }, }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={setClipboard} edge="end">
                                    <FileCopyRoundedIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
            ) : null}

            <Stack direction="row" spacing={0} justifyContent={'center'} alignItems={"center"} width={"100%"}>
                {showBox === "false" ? (
                    <Typography fontSize={isMobile ? 9 : 11}>اشتراک‌گذاری</Typography>
                ) : null}

                <Tooltip title="Telegram">
                    <IconButton
                        href={`https://t.me/share/url?url=${myLink}`}
                        target="_blank"
                    >
                        <TelegramIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="WhatsApp">
                    <IconButton href={`https://wa.me/?text=${myLink}`} target="_blank">
                        <WhatsAppIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="LinkedIn">
                    <IconButton
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${myLink}`}
                        target="_blank"
                    >
                        <LinkedInIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="X">
                    <IconButton
                        href={`https://www.twitter.com/intent/tweet?url=${myLink}`}
                        target="_blank"
                    >
                        <XIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Facebook">
                    <IconButton
                        href={`https://www.facebook.com/share.php?u=${myLink}`}
                        target="_blank"
                    >
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                </Tooltip>

                {/* <Tooltip title="Eitta">
                    <IconButton
                        href={`https://www.eitaa.com/share/url?url=${myLink}`}
                        target="_blank"
                    >
                        <img className="cursor-pointer" src={EittaPhoto} style={{ width: "15px", height: "15px", filter: "brightness(0) invert(1)", }} alt={'آیکون ایتا'} />
                    </IconButton>
                </Tooltip> */}
            </Stack>
        </Stack>


    );
};

export default LinkerShare;
