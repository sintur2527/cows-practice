import React, { Component, Fragment } from 'react';
import CowForm from './CowForm.jsx';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <CowForm />
        </form>
      </Fragment>
    );
  }
}
