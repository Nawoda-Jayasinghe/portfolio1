import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../Components/AppBar/AppBar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Root;
