import V2Routes from "modules/v2/routes";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import V1Routes from "../modules/v1/routes";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<V1Routes />} />
      <Route path="/plataforma" element={<V2Routes />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
