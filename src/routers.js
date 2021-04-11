import React from "react";
import Pages from "./pages";

const { StronaGlowna, Kontakt } = Pages;

const Routers = {
  "/": () => <StronaGlowna />,
  "/kontakt": () => <Kontakt />
};

export default Routers;
