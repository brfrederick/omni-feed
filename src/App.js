import React, { Component } from 'react';
import ThemeProvider from 'react-theme-provider';
import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <h1> App! </h1>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
