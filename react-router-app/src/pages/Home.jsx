import React from "react";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}
