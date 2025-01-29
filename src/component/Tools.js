import { useTheme } from "@mui/material/styles";

export const YellowColor = "yellow";

export const BaseColor = () => {
  const theme = useTheme();
  return {
    primary: "#eb5626", // مقدار سفارشی شما
    text: "#eb5326", // مقدار سفارشی شما
    textSecondary: "#eb5626", // مقدار سفارشی شما
    orange1: "#eb5626", // مقدار سفارشی شما
    orange2: theme.palette.secondary.main, // مقدار اصلی از theme
    yellow: "#eb5626", // مقدار ثابت
    action: theme.palette.action.active, // مقدار اصلی از theme
  };
};
