import React from "react";
import Footer from "../Footer";
import "./Layout.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
