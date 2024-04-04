import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/page.tsx";
import EventPage from "../pages/Event/page.tsx";
import ContactPage from "../pages/Contact/page.tsx";
import BlogPage from "../pages/Blog/page.tsx";
import AboutPage from "../pages/About/page.tsx";
import BlogId from "../pages/Blog/blogId/BlogId.tsx";
import EventId from "../pages/Event/eventId/EventId.tsx";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/:eventId" element={<EventId/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:blogId" element={<BlogId/>}/>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
