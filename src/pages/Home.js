import React from "react";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Summary from "../components/Summary";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Summary />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
