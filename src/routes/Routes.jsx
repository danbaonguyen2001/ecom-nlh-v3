import React from "react";
import { Redirect, Route, Routes } from "react-router-dom";

import ErrorBoundary from "../components/error/ErrorBoundary";
// Public
import Home from "../screens/Home";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
// Private
import Cart from "../screens/Cart";
import Orders from "../screens/Orders";
import OrderDetail from "../components/order/OrderDetail";
import UserInfor from "../screens/UserInfor";
import ForgotPass from "../components/auth/ForgotPass";
import ChangePass from "../components/auth/ChangePass";

const Components = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Public -Routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpass" element={<ForgotPass />} />

        {/* Private- Routes */}
        <Route path="changepass" element={<ChangePass />} />
        <Route path="user-infor" element={<UserInfor />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order-list" element={<Orders />} />
        <Route path="order/:slug" element={<OrderDetail />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default Components;
