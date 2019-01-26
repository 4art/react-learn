import React, { Component } from 'react';
import MenuBar from './MenuBar';
import Registration from './components/Registration';
import { Route } from "react-router-dom";
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <>
        <MenuBar />
        <Route exact component={() => <Home name="Gast" />} path="/" />
        <Route component={Registration} path="/registration" />
      </>
    )
  }
}

export default App;