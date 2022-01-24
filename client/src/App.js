import React from "react";

import Header from "./components/Header"
import Footer from './components/Footer';
import LoginSignup  from './components/LoginSignup';
import Homepage from './components/Homepage';
import '../src/styles/App.css';


function App() {
  return (
    <div className="appPage">
      <Header />
      <LoginSignup />
      <Footer />
      
      

    </div>
  );
}

export default App;
