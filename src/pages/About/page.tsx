import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import AboutUs from "./components/AboutUs.tsx";
import OurStaff from "./components/OurStaff.tsx";
import ClientFeedback from "./components/ClientFeedback.tsx";
import AdditioalEvents from "./components/AdditioalEvents.tsx";
import { VStack } from "@chakra-ui/react";
import Background from "./components/Background.tsx";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <AboutUs />
      <AdditioalEvents />
      <OurStaff />
      {/* <Background /> */}
      {/* <ClientFeedback /> */}
    </Layout>
  );
};

export default AboutPage;
