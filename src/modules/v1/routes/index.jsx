import Banner from "components/Banner";
import NavBar from "components/NavBar";
import About from "modules/v1/pages/About/About";
import Advice from "modules/v1/pages/Advice";
import Contact from "modules/v1/pages/Contact";
import Home from "modules/v1/pages/Home";
import Investments from "modules/v1/pages/Investments";
import WhoAreUs from "modules/v1/pages/WhoAreUs";
import FAQ from "modules/v2/pages/FAQ";
import React from "react";

const V1Routes = () => (
  <>
    <NavBar />
    <Home />
    <About />
    <WhoAreUs />
    <Advice />
    <Banner />
    <Investments />
    <Contact />
    <FAQ />
  </>
);

export default V1Routes;
