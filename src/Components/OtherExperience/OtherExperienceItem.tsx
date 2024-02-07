import { Box, Typography } from "@mui/material";
import Popping from "../Animation/Popping";
import type { OtherExperience } from "./otherExperienceData";

const OtherExperienceItem = ({
  organization,
  position,
  time,
}: OtherExperience) => {
  return (
    <Popping>
      <Box
        sx={{
          backgroundColor: "#F4F4F5",
          borderRadius: "12px",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography variant="caption">{time}</Typography>
        <Typography variant="body1" fontWeight={600}>
          {position}
        </Typography>
        <Typography variant="body2">{organization}</Typography>
      </Box>
    </Popping>
  );
};

export default OtherExperienceItem;
