import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mainfeed from "./Pages/Mainfeed";
import QuizPage from "./Pages/QuizPage";
import QuizForm from "./components/QuizForm";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/takequiz/:quizId">
          <div>
            <QuizPage />
          </div>
        </Route>
        <Route exact path ="/mainfeed">
          <Mainfeed />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
