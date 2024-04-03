import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import AboutUs from "./components/AboutUs.tsx";
import OurStaff from "./components/OurStaff.tsx";
import ClientFeedback from "./components/ClientFeedback.tsx";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <AboutUs />
      <OurStaff />
      <ClientFeedback />
    </Layout>
  );
};

export default AboutPage;
