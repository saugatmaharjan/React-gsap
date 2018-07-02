import React, { Component } from 'react';
import {TimelineMax} from "gsap/TweenMax";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  wrapper = null;
  tl = new TimelineMax();
  componentDidMount() {

    console.log(this.tl);
    
    this.tl.from(this.wrapper, 1.5, {opacity: 0, x: 100})
      .to(this.wrapper, 1.5, {opacity:0, x: 100})
  }
  render() {
    return (
      <div className="App" ref={(wrapper) => { this.wrapper = wrapper }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
