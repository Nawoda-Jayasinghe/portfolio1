import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { URLS } from "../../Constants/urls";

type Props = {
  onClick?: () => void;
  mobile?: boolean;
};

const AppNavLink = ({
  urlKey,
  url,
  isActive,
  onClick,
  mobile,
}: {
  urlKey: keyof typeof URLS;
  url: string;
  isActive: boolean;
  onClick?: () => void;
  mobile?: boolean;
}) => {
  return (
    <Link
      key={urlKey}
      to={url}
      style={{
        textDecoration: "none",
      }}
      onClick={() => onClick?.()}
    >
      <Typography
        fontSize={"1.1rem"}
        sx={{
          color: isActive ? "#222222" : "#707070",
          ":hover": {
            color: "secondary.main",
          },
          padding: "0.5rem 0.75rem",
          backgroundColor: isActive && mobile ? "#E0EFFF" : "",
          borderRadius: "12px",
          marginBottom: "0.5rem",
        }}
        fontWeight={isActive ? "bold" : ""}
      >
        {urlKey}
      </Typography>
    </Link>
  );
};

const NavLinks = ({ onClick, mobile }: Props) => {
  const location = useLocation();
  return Object.keys(URLS).map((key) => (
    <AppNavLink
      key={key}
      urlKey={key as keyof typeof URLS}
      url={URLS[key as keyof typeof URLS]}
      isActive={location.pathname === URLS[key as keyof typeof URLS]}
      onClick={onClick}
      mobile={mobile}
    />
  ));
};

export default NavLinks;
