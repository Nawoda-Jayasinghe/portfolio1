import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App.tsx";
import { BRAND } from "./Constants/brand.ts";
import "./index.css";

const title = document.getElementsByTagName("title")[0];
title.innerHTML = BRAND;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
