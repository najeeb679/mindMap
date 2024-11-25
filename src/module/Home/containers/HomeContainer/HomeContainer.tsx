import React from "react";
import Header from "../../components/Header/Header";
import AboutMe from "../../components/AboutMe/AboutMe";
import Testimonials from "../../components/Testimonials/Testimonials";
import FormContainer from "../../components/FormContainer/FormContainer";
import { AppLayout } from "@muc/layout";

const HomeContainer = () => {
  return (
    <>
      <Header />
      {/* <AboutMe /> */}
      <Testimonials />
      <FormContainer />
    </>
  );
};

export default HomeContainer;
