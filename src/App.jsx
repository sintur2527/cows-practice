import React, { Component, Fragment } from 'react';
import Details from './Details.jsx';
import CowForm from './CowForm.jsx';
import CowList from './CowList.jsx';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Details />
        </div>
        <div>
          <CowForm />
        </div>
        <div>
          <CowList />
        </div>
      </Fragment>
    );
  }
}
