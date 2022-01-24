import React from "react";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Header from "./components/Header"
import Footer from './components/Footer';
import LoginSignup  from './components/LoginSignup';



function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <div>
      <ApolloProvider client={client}>
      
      <Header />
      <LoginSignup />
      <Footer />
      </ApolloProvider>      
    </div>
  );
}

export default App;
