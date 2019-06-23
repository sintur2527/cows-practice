import React, { Component, Fragment } from 'react';

export default class CowForm extends Component {
  render() {
    return (
      <Fragment>
        <input type="text" placeholder="Enter cow name" />
        <input type="text" placeholder="Enter description" />
        <input type="submit" value="Submit" />
      </Fragment>
    );
  }
}
