import React, { Component, Fragment } from 'react';

export default class CowListEntry extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.value.toUpperCase()}</div>
      </Fragment>
    );
  }
}
