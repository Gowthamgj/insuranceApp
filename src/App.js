import React, { Component } from 'react';
import logo from './logo.svg';
import Headnav from "./headnav"
import SlideImg from "./slideimg"
import Headingelement from "./headingelement"
import Help from "./help"
import './App.css';
import Button from '@material-ui/core/Button';
import Twoheading from './twoheading';
import Mappart from './mappart';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Headnav/>
        <SlideImg/>
        <Headingelement/>
        <Help/>
        <Twoheading/>
        <Mappart/>
      </div>
    );
  }
}

export default App;
