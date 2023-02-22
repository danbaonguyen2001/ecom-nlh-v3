import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Routes from "../routes/Routes";
import App from "./App";

import Loading from "./Loading";
import ChatBot from "../components/ChatBot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer />
          <App>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 min-h-[300px]">
              <Routes />
            </div>
            <ChatBot />
          </App>
          {/* <Header />
        <Routes />
        <Footer /> */}
        </Provider>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Layout;
