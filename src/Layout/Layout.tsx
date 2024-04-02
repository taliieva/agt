import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Providers from "./Providers.tsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Providers>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Providers>
    </div>
  );
};

export default Layout;
