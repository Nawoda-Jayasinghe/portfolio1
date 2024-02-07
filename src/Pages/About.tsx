import { Box } from "@mui/material";
import AboutMe from "../Components/AboutMe/AboutMe";
import Achivements from "../Components/Achivements/Achivements";
import ArtWorks from "../Components/Artworks/Artworks";
import ExperienceList from "../Components/Experiences/ExperienceList";
import OtherExperienceList from "../Components/OtherExperience/OtherExperienceList";
import TestimonialList from "../Components/Testimonials/TestimonialList";

const About = () => {
  return (
    <Box display="flex" gap={5} flexDirection="column" mb="2rem">
      <AboutMe />
      <ExperienceList />
      <Achivements />
      <ArtWorks />
      <OtherExperienceList />
      <TestimonialList />
    </Box>
  );
};

export default About;
