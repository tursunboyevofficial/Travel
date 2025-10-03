import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <div className={styles.authWrapper}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default Auth;
