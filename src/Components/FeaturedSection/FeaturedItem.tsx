import {
  Box,
  Divider,
  Grid,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Popping from "../Animation/Popping";
import { Feature } from "./featuredData";

const FeaturedItem = ({
  body,
  image,
  title,
  rightToLeft,
  link,
}: Feature & { rightToLeft: boolean }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const handleImageClick = (url: string) => () => window.open(url, "_blank");

  return (
    <Popping>
      <Grid container sx={{ my: { xs: "1rem", lg: "1.5rem" } }}>
        <Grid
          order={isDesktop && rightToLeft ? 2 : 1}
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent:
              isDesktop && rightToLeft ? "flex-end" : "flex-start",
            pl: isDesktop ? (rightToLeft ? "1rem" : 0) : 0,
            pr: isDesktop ? (rightToLeft ? 0 : "1rem") : 0,
          }}
        >
          <Box
            component={"img"}
            src={image}
            sx={{
              height: "100%",
              width: "100%",
              cursor: "pointer",
              ":hover": { opacity: 0.7 },
            }}
            onClick={handleImageClick(link)}
          />
        </Grid>
        <Grid
          order={isDesktop && rightToLeft ? 1 : 2}
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            pr: isDesktop ? (rightToLeft ? "1rem" : 0) : 0,
            pl: isDesktop ? (rightToLeft ? 0 : "1rem") : 0,
            pt: { xs: "1.5rem", lg: 0 },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Grid>
        {!isDesktop && (
          <Grid item xs={12} order={3} pt="1rem">
            <Divider sx={{ borderBottomWidth: 2 }} />
          </Grid>
        )}
      </Grid>
    </Popping>
  );
};

export default FeaturedItem;
