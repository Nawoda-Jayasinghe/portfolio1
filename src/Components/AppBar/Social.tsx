import { Box, IconButton, Link } from "@mui/material";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaBehance, FaLinkedinIn } from "react-icons/fa6";

const SOCIAL_SITES = [
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/nawoda-jayasinghe-0a04851a7/",
  },
  { icon: FaBehance, link: "https://www.behance.net/nawodajayasin" },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/nawodaJayasingheVonArtZ/",
  },
  { icon: FaInstagram, link: "https://www.instagram.com/nawoda_jay/" },
  { icon: BiLogoMediumOld, link: "https://medium.com/@nawoda.jayasinghe98" },
];

type Props = {
  mobile?: boolean;
};

const Social = ({ mobile }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: mobile ? 3 : 1,
        padding: "0.5rem 0.75rem",
        justifyContent: mobile ? "space-between" : "",
      }}
    >
      {SOCIAL_SITES.map((Social, index) => (
        <Link key={index} href={Social.link} target="_blank">
          <IconButton size="small">
            <Social.icon style={{ color: "#222222" }} />
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};

export default Social;
