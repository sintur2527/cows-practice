import React, { Component, Fragment } from 'react';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h3>Description:</h3>
        <div>{this.props.cow}</div>
      </Fragment>
    );
  }
}
