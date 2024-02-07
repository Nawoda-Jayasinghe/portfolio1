import { Box, Grid } from "@mui/material";
import SubHeader from "../SubHeader/SubHeader";
import OtherExperienceItem from "./OtherExperienceItem";
import otherExperiences from "./otherExperienceData";

const OtherExperienceList = () => {
  return (
    <Box display="flex" gap={3} flexDirection="column">
      <SubHeader
        title={"Others Experiences"}
        borderThikness={1}
        textVariant="body1"
        fontWeight={600}
      />
      <Grid container spacing={2}>
        {otherExperiences.map((experience, i) => (
          <Grid item key={i} xs={12} md={6} lg={4}>
            <OtherExperienceItem {...experience} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OtherExperienceList;
