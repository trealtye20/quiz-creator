import React from "react";
import Landingpage from "./Pages/Landingpage";
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="appPage">
      
      <Landingpage/>
      
    </div>
    </ ApolloProvider>
  );
}

export default App;
