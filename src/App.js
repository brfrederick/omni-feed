import React, { Component } from 'react';
import ThemeProvider from 'react-theme-provider';
import './App.css';

/* react-theme-provider
 https://github.com/sm-react/react-theme-provider

 <ThemeProvider
    themes={[greyTheme, altTheme]}
    themeInd={1}
    override
    setCSS={CSSrule}
  >
    <ThemedComponent />
  </ThemeProvider>
*/
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
