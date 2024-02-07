import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BRAND } from "../../Constants/brand";
import NavLinks from "./NavLinks";
import Social from "./Social";

const MobileAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleClick = () => setIsDrawerOpen((p) => !p);
  return (
    <Box
      sx={{
        padding: "1rem 0rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "500", fontSize: "1.2rem" }}>
        {BRAND}
      </Typography>
      <IconButton onClick={handleClick}>
        <RxHamburgerMenu size={28} style={{ color: "#222222" }} />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={handleClick}
        anchor="bottom"
        PaperProps={{
          square: false,
          style: { borderTopLeftRadius: "12px", borderTopRightRadius: "12px" },
        }}
      >
        <Box
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            p: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          height="30vh"
        >
          <Box>
            <NavLinks onClick={handleClick} mobile />
          </Box>
          <Social mobile />
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileAppBar;
