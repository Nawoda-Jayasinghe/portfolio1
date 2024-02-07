import { Box, Typography } from "@mui/material";
import Popping from "../Animation/Popping";
import SubHeader from "../SubHeader/SubHeader";

const AboutMe = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <SubHeader
        title="About Me"
        borderThikness={1}
        textVariant="body1"
        fontWeight={600}
      />
      <Popping>
        <Box
          sx={{
            width: { xs: "100%", lg: "60%" },
            backgroundColor: "#F4F4F5",
            borderRadius: "12px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <Typography variant="body2">
            Hey, I'm in my final year at the University of Kelaniya, studying
            Management and IT. For the past 3 years, I've been on a mission,
            crafting user experiences for both web and mobile apps. I'm not just
            a techie; I'm the creative thinker injecting some flair into the
            digital canvas.
          </Typography>
          <Typography variant="body2">
            Let's make IT simple, snazzy, and oh-so-cool!
          </Typography>
        </Box>
      </Popping>
    </Box>
  );
};

export default AboutMe;
