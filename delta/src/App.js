import React from 'react'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router";

// pages
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/pricing" exact component={PricingPage} />
      </Switch>
    </Router>
  );
}

export default App;
