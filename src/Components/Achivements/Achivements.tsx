import { Box, Grid } from "@mui/material";
import ac1 from "../../assets/achivements/ac_1.png";
import ac2 from "../../assets/achivements/ac_2.png";
import ac3 from "../../assets/achivements/ac_3.png";
import ac4 from "../../assets/achivements/ac_4.png";
import ac5 from "../../assets/achivements/ac_5.png";
import Popping from "../Animation/Popping";
import SubHeader from "../SubHeader/SubHeader";

const ACHIVEMENTS = [ac1, ac2, ac3, ac4, ac5];

const Achivements = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <SubHeader
        title="Achivements"
        borderThikness={1}
        textVariant="body1"
        fontWeight={600}
      />
      <Grid container justifyContent="space-around" gap={3}>
        {ACHIVEMENTS.map((achivement, i) => (
          <Grid item key={i} xs={12} lg={3.8}>
            <Popping>
              <img src={achivement} style={{ width: "100%", height: "100%" }} />
            </Popping>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achivements;
