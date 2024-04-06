import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import AboutEvents from "./components/AboutEvents.tsx";
// import TeamSection from "./components/TeamSection.tsx";
import BlogSection from "./components/BlogSection.tsx";
import Carousel from "./components/Carousel.tsx";
import EventSection from "./components/EventSection.tsx";
import SponsorSection from "./components/SponsorSection.tsx";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Carousel />
      <AboutEvents />
      {/* <TeamSection /> */}
      <BlogSection />
      <EventSection />
      <SponsorSection />
    </Layout>
  );
};

export default HomePage;
