import { useTheme } from "@mui/material/styles";

export const YellowColor = "yellow";

export const BaseColor = () => {
  const theme = useTheme();
  return {
    primary: "#5D8736", // مقدار سفارشی شما
    text: "#809D3C", // مقدار سفارشی شما
    textSecondary: "#A9C46C", // مقدار سفارشی شما
    orange1: "#A9C46C", // مقدار سفارشی شما
    orange2: theme.palette.secondary.main, // مقدار اصلی از theme
    yellow: YellowColor, // مقدار ثابت
    action: theme.palette.action.active, // مقدار اصلی از theme
  };
};
