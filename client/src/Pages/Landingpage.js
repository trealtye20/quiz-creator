import React from "react";
import Header from '../components/Header';
import LoginSignup from "../components/LoginSignup";
import Users from "../components/Users";
import Footer from "../components/Footer";

const Landingpage = () => {

  // const profiles = data?.profiles || [];

  return (
    <div>
      <Header />
      <LoginSignup />
      <Footer />
    </div>
  );
};

export default Landingpage;



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