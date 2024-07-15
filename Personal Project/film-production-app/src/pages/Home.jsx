import React from "react";
import Carousel from "../components/Carousel";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Carousel />
      <hr />
      <Services />
      <hr />
      <About />
      <hr />
      <Contact />
    </>
  );
}
