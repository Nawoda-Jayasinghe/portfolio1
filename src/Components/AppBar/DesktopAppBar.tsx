import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BRAND } from "../../Constants/brand";
import { URLS } from "../../Constants/urls";
import NavLinks from "./NavLinks";
import Social from "./Social";

const DesktopAppBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "1rem 0rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", lineHeight: 1.2, fontSize: "1.2rem" , cursor:'pointer'}}
        onClick={() => navigate(URLS.Home)}
      >
        {BRAND}
      </Typography>
      <Box sx={{ display: "flex", gap: 3, alignItems: "baseline" }}>
        <NavLinks />
      </Box>
      <Social />
    </Box>
  );
};

export default DesktopAppBar;
