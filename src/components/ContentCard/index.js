import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

class ContentCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader />

        <CardTitle title="Change me" />
        <CardText>
          Oh, hello! How are you? I need to figure out what I want here.
        </CardText>
      </Card>
    );
  }
}

export default ContentCard;
