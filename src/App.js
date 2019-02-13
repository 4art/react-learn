import React, { Component } from 'react';
import MenuBar from './MenuBar';
import Registration from './components/Registration';
import { Route } from "react-router-dom";
import Home from './components/Home';
import { BrowserRouter } from "react-router-dom";
import OrderList from './components/OrderList';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <>
          <MenuBar store={this.props.store}/>
          <Route exact component={() => <Home name="Gast" />} path="/" />
          <Route component={() => <Registration store={this.props.store}/>} path="/registration" />
          <Route component={() => <OrderList store={this.props.store}/>} path="/order" />
        </>
      </BrowserRouter>
    )
  }
}

export default App;