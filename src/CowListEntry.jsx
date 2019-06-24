import React, { Component, Fragment } from 'react';

export default class CowListEntry extends Component {
  render() {
    return (
      <Fragment>
        <li
          className="list-group-item"
          onClick={() => this.props.handleCowClick(this.props.description)}>
          {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
        </li>
      </Fragment>
    );
  }
}
