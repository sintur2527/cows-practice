import React, { Component, Fragment } from 'react';
import CowListEntry from './CowListEntry.jsx';

export default class CowList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.props.cows.map(cow => (
            <CowListEntry key={cow.id} value={cow.name} />
          ))}
        </div>
      </Fragment>
    );
  }
}
