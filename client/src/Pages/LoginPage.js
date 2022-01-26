import React from "react";
import Header from '../components/Header';
import LoginSignup from "../components/LoginSignup";
import Users from "../components/Users";
import Footer from "../components/Footer";
import Mainfeed from "./Mainfeed";
import "../styles/LoginBody.css"

const LoginPage = () => {
  // const profiles = data?.profiles || [];

  return (
    <div className="login">
      <Header />
      <LoginSignup/>
      <Footer />
      
    </div>
  );
};

export default LoginPage;



{/* <main>
  <div className="flex-row justify-center">
    <div className="col-12 col-md-10 mb-3 p-3"
    style={{border: '1px dotted #1a1a1a'}}>
      <ProfileForm />

    </div>

    <div className="col-12 col-md-10 my-3">

      {Loading ? (<div> Loading... </div>)
      :
      {ProfileList profiles={profiles} title= "Here's the current roster.." />)}
      </div>

    </div>
  </div>
</main> */}