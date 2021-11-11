import React from "react";
import Footer from "../Footer";
import Navbar from "./../navbar/index";

const MainLayout = ({ children, title, className, style }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main style={style} className={className}>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
