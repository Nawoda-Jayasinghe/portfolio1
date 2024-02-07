import { Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopAppBar from "./DesktopAppBar";
import MobileAppBar from "./MobileAppBar";

const AppBar = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  return isDesktop ? <DesktopAppBar /> : <MobileAppBar />;
};

export default AppBar;
