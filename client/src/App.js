import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Header from "./components/Header"
import Footer from './components/Footer';
import LoginSignup  from './components/LoginSignup';
import Landingpage from "./Pages/Landingpage";


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
     <div>
        <Landingpage/>
      </div>
    </ ApolloProvider>
  );
}

export default App;
