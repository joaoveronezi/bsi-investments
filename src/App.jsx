import React from "react";
import NavBar from "components/NavBar";
import About from "pages/About/About";
import Home from "pages/Home";
import WhoAreUs from "pages/WhoAreUs";
import Advice from "pages/Advice";
import Banner from "components/Banner";
import Investments from "pages/Investments";
import Contact from "pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <WhoAreUs />
      <Advice />
      <Banner />
      <Investments />
      <Contact />
    </>
  );
}

export default App;
