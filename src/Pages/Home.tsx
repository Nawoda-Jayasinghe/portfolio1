import { Box } from "@mui/material";
import FeaturedSection from "../Components/FeaturedSection/FeaturedSection";
import Landing from "../Components/Landing/Landing";

const Home = () => {
  return (
    <Box display='flex' gap={5} flexDirection='column'>
      <Landing />
      <FeaturedSection />
    </Box>
  );
};

export default Home;
