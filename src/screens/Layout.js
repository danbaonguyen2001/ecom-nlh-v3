import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import Routes from "../routes/Routes";
import App from "./App";

import Loading from "./Loading";

const Layout = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Provider store={store}>
          <App>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <Routes />
            </div>
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
