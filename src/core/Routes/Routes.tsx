import { AppLayout, Footer, Navbar } from "@muc/layout";
import {
  AboutContainer,
  HomeContainer,
  MyTreatmentContainer,
  UpdateContainer,
} from "@muc/modules";

import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <AppLayout>
      <ReactRoutes>
        <Route path="/" element={<HomeContainer />} />

        <Route path="/about" element={<AboutContainer />} />
        <Route path="/treatment" element={<MyTreatmentContainer />} />

        <Route path="/updates" element={<UpdateContainer />} />
      </ReactRoutes>
    </AppLayout>
  );
};

export default Routes;
