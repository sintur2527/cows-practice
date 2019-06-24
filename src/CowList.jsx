import React, { Component, Fragment } from 'react';
import CowListEntry from './CowListEntry.jsx';

export default class CowList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h3>My Cows:</h3>
        <ul className="list-group list-group-flush">
          {this.props.cows.map(cow => (
            <CowListEntry
              key={cow.id}
              name={cow.name}
              description={cow.description}
              handleCowClick={this.props.handleCowClick}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
