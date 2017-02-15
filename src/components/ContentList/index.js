import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentCard from '../ContentCard';


class ContentList extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <ContentCard />
        </ListItem>
        <ListItem>
          <ContentCard />
        </ListItem>
        <ListItem>
          <ContentCard />
        </ListItem>
        <ListItem>
          <ContentCard />
        </ListItem>
      </List>
    );
  }
}

export default ContentList;
