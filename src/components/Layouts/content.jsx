import React from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

const Content = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Sidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <Header />
          <div className="body flex-grow-1">{children}</div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Content;
