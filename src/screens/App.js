import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
