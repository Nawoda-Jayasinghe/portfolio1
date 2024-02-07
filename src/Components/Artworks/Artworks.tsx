import { Box } from "@mui/material";
import Slider from "react-slick";
import SubHeader from "../SubHeader/SubHeader";
import artworkData from "./artworkData";

const ArtWorks = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box display="flex" gap={3} flexDirection="column">
      <SubHeader
        title={"Art works"}
        borderThikness={1}
        textVariant="body1"
        fontWeight={600}
      />
      <Slider {...settings}>
        {artworkData.map((image, i) => (
          <Box key={i} width="800px" height="400px" sx={{ p: "0.5rem" }}>
            <img
              src={image}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ArtWorks;
