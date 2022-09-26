/* eslint-disable no-unused-vars */
import Footer from "components/Footer";
import WhatsappButton from "components/WhatsappButton";
import React from "react";
import Routes from "routes/MainRoutes";

const App = () => (
  <>
    <WhatsappButton />
    <Routes />
    <Footer />
  </>
);

export default App;
