import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { COLORS } from "../../Theme/Theme";
import brandImageUrl from "../../assets/branding-image.png";
import cv from "../../assets/cv/Nawoda Jayasinghe.pdf";
import Popping from "../Animation/Popping";

const Landing = () => {
  return (
    <Grid container>
      <Grid
        order={{ xs: 2, lg: 1 }}
        item
        xs={12}
        lg={6}
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: 3, lg: 10 },
          marginTop: { xs: 5, lg: 0 },
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Divider
            sx={{
              borderBottom: `5px solid ${COLORS.secondary}`,
              width: "30px",
            }}
          />
          <Typography variant="h4" fontWeight={600}>
            UX Designer
          </Typography>
          <Typography variant="body1">
            Born a creator, thriving as a UX designer! Welcome to my digital
            playground where creativity meets functionality.
          </Typography>
        </Box>
        <Button
          size="large"
          sx={{ width: { xs: "100%", lg: "auto" } }}
          onClick={() => window.open(cv, "_blank")?.focus()}
        >
          Download CV
        </Button>
      </Grid>
      <Grid item lg={6} order={{ xs: 1, lg: 2 }}>
        <Popping>
          <img src={brandImageUrl} style={{ width: "100%", height: "100%" }} />
        </Popping>
      </Grid>
    </Grid>
  );
};

export default Landing;
