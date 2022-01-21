import React from "react";
import Navigation from "./components/Navigation.js";
import Header from "./components/Header"
import Footer from './components/Footer';
import LoginSignup  from './components/LoginSignup';


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <LoginSignup />
      <Footer />
    </div>
  );
}

export default App;
