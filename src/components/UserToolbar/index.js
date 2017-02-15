import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class UserToolbar extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <p>hi</p>
              </IconButton>
            }
          >
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="ToolbarTitle" />
          <ToolbarSeparator />
          <RaisedButton label="RaisedButton" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default UserToolbar;
