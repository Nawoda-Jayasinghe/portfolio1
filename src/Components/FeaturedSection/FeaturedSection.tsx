import { Box } from "@mui/material";
import SubHeader from "../SubHeader/SubHeader";
import FeaturedItem from "./FeaturedItem";
import { featuredData } from "./featuredData";

const FeaturedSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: "column",
        marginBottom: "25px",
      }}
    >
      <SubHeader title="Featured Work" textVariant="h6" borderThikness={2} />
      {featuredData?.map((item, i) => (
        <FeaturedItem rightToLeft={i % 2 !== 0} {...item} key={i} />
      ))}
    </Box>
  );
};

export default FeaturedSection;
