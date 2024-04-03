import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.tsx";
import OurBlogs from "./components/OurBlogs.tsx";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <OurBlogs />
    </Layout>
  );
};

export default BlogPage;
