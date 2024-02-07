import { ThemeProvider, createTheme } from "@mui/material";

export const COLORS = {
  primary: "#222222",
  secondary: "#D2B356",
};

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      color: COLORS.primary,
    },
  },
  palette: {
    primary: { main: COLORS.primary },
    secondary: { main: COLORS.secondary },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          border: `3px solid ${COLORS.primary}`,
          ":hover": { borderColor: COLORS.secondary, color: COLORS.secondary },
        },
      },
    },
  },
});

type Props = {
  children?: React.ReactNode;
};

const AppThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
