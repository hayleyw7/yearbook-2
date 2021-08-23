import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Yearbook</h1>
        </header>
        <header className="App-header">
          <h1 class='head-2'>EXCEPT FOR PETS!</h1>
        </header>        
        <Cohort />
      </div>
    );
  }
}

export default App;
