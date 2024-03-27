import React from 'react'
import Layout from '../../Layout/Layout.tsx'
import AboutUs from './components/AboutUs.tsx'
import OurStaff from './components/OurStaff.tsx'
import ClientFeedback from './components/ClientFeedback.tsx'

const AboutPage = () => {
  return (
    <Layout>
      <AboutUs/>
      <OurStaff/>
      <ClientFeedback/>
    </Layout>
  )
}

export default AboutPage
