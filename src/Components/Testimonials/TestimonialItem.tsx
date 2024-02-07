import { Avatar, Box, Divider, Typography } from "@mui/material";
import { COLORS } from "../../Theme/Theme";
import Popping from "../Animation/Popping";
import type { Testimonial } from "./testimonialsData";

const TestimonialItem = ({ image, message, position }: Testimonial) => {
  return (
    <Popping>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        gap={4}
        sx={{ bgcolor: "#F4F4F5", p: "2rem" }}
      >
        <Avatar src={image} sx={{ height: "150px", width: "150px" }} />
        <Typography textAlign="center">"{message}"</Typography>
        <Divider
          sx={{
            borderBottom: `4px solid ${COLORS.secondary}`,
            width: "30px",
          }}
        />
        <Typography variant="body2" textAlign="center">
          {position}
        </Typography>
      </Box>
    </Popping>
  );
};

export default TestimonialItem;
