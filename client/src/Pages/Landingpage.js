import React from "react";
import Header from '../components/Header';
import LoginSignup from "../components/LoginSignup";
import Users from "../components/Users";
import Footer from "../components/Footer";

const Landingpage = () => {
  return (
    <div>
      <Header />
      <LoginSignup />
      <Users />
      <Footer />
    </div>
  );
};

export default Landingpage;
