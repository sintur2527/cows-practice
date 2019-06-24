import React, { Component } from 'react';
import CowListEntry from './CowListEntry.jsx';

export default class CowList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <ul>
          {this.props.cows.map(cow => (
            <CowListEntry key={cow.id} value={cow.name} />
          ))}
        </ul>
      </div>
    );
  }
}
