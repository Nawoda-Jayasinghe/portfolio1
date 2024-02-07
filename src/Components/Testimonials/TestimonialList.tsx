import { Box, Grid } from "@mui/material";
import SubHeader from "../SubHeader/SubHeader";
import TestimonialItem from "./TestimonialItem";
import testimonials from "./testimonialsData";

const TestimonialList = () => {
  return (
    <Box display="flex" gap={3} flexDirection="column">
      <SubHeader
        title={"What people say about my work"}
        borderThikness={1}
        textVariant="body1"
        fontWeight={600}
      />
      <Grid container spacing={2}>
        {testimonials.map((testimonial, i) => (
          <Grid item key={i} xs={12} md={6} lg={4}>
            <TestimonialItem {...testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialList;
