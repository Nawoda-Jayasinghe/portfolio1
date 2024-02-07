import { Box, Typography } from "@mui/material";
import Popping from "../Animation/Popping";
import { Experience } from "./experienceData";

const ExperienceItem = ({
  data: { keyPoints, time, title },
}: {
  data: Experience;
}) => {
  return (
    <Popping>
      {" "}
      <Box
        sx={{
          backgroundColor: "#F4F4F5",
          borderRadius: "12px",
          padding: "1.5rem",
          width: { xs: "100%", lg: "60%" },
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "flex-start", lg: "center" },
          }}
        >
          <Typography variant="body1" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="caption">{time}</Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          {keyPoints.map((point, i) => (
            <Box component="li" key={i}>
              <Typography component="span" m={0} variant="body2">
                {point}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Popping>
  );
};

export default ExperienceItem;
