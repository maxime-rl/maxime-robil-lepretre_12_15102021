import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LoginPage, UserProfilePage, ErrorPage } from "../pages";
import { NavBar, Footer } from "../components";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          <UserProfilePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
