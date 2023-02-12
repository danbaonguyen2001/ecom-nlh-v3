import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import ProductDetail from "../components/product/ProductDetail";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <ProductDetail></ProductDetail>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
