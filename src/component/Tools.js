import { useTheme } from '@mui/material/styles';
export const YellowColor = "yellow"

export const BaseColor = () => {
    const theme = useTheme();
    return {
        background: theme.palette.background.default,
        primary: theme.palette.primary.main,
        text: theme.palette.text.primary,
        textSecondary: theme.palette.text.secondary,
        orange1: theme.palette.primary.main,
        orange2: theme.palette.secondary.main,
        yellow: YellowColor,
        action: theme.palette.action.active,
    };
};

