import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Components from "../routes/Routes";

import Loading from "./Loading";

const Layout = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes
          render={(props) => (
            <div>
              <Header></Header>
              <Components />
              <Footer></Footer>
            </div>
          )}
        />
        <Header></Header>

        <Footer></Footer>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Layout;
