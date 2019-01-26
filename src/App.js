import React, { Component } from 'react';
import MenuBar from './MenuBar';
import Form from './components/Form';

class App extends Component {
  
  render() {
    return (
      <>
        <MenuBar />
        <Form/>
      </>
    )
  }
}

export default App;