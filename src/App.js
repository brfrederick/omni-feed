import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserToolbar from './components/UserToolbar';
import ContentList from './components/ContentList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <UserToolbar />
          <ContentList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
