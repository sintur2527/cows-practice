import React, { Component } from 'react';

export default class CowListEntry extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <li>{this.props.cow}</li>
      </div>
    );
  }
}
