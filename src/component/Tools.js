import { useTheme } from "@mui/material/styles";

export const YellowColor = "yellow";

export const BaseColor = () => {
  const theme = useTheme();
  return {
    primary: "#eb5626", 
    text: "#eb5326", 
    textSecondary: "#eb5626", 
    orange1: "#eb5626", 
    orange2: theme.palette.secondary.main, 
    yellow: "#eb5626", 
    blue1: "#0489ca", 
    blue2: theme.palette.info.main, 
    action: theme.palette.action.active, 
  };
};
