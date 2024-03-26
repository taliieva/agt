import React from "react";
import Layout from "../../Layout/Layout.tsx";
import AboutEvents from "./components/AboutEvents.tsx";
import TeamSection from "./components/TeamSection.tsx";
import BlogSection from "./components/BlogSection.tsx";
import Carousel from "./components/Carousel.tsx";

const HomePage = () => {
  return (
    <Layout>
      <Carousel/>
      <AboutEvents/>
      <TeamSection/>
      <BlogSection/>
    </Layout>
  );
};

export default HomePage;
