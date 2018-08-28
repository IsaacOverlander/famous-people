import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Stars from './components/Stars/Stars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stars />
      </div>
    );
  }
}

export default App;
