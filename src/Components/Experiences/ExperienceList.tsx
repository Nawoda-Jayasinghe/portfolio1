import { Box } from "@mui/material";
import SubHeader from "../SubHeader/SubHeader";
import ExperienceItem from "./Experience";
import experiences from "./experienceData";

const ExperienceList = () => {
  return (
    <Box display="flex" gap={3} flexDirection="column">
      <SubHeader
        title={"Experiences"}
        borderThikness={1}
        textVariant="body1"
        fontWeight={600}
      />
      {experiences.map((experience, i) => (
        <ExperienceItem data={experience} key={i} />
      ))}
    </Box>
  );
};

export default ExperienceList;
