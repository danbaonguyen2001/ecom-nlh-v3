import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Routes from "../routes/Routes";
import App from "./App";

import Loading from "./Loading";

const Layout = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <App>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Routes />
          </div>
        </App>
        {/* <Header />
        <Routes />
        <Footer /> */}
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Layout;
