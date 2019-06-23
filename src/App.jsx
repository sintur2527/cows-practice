import React, { Component, Fragment } from 'react';
import Details from './Details.jsx';
import CowForm from './CowForm.jsx';
import CowList from './CowList.jsx';
import getCows from './lib/getCows.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cowlist: [],
    };
  }

  componentDidMount() {
    getCows.get();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-7">
            <Details />
          </div>
          <div className="col-md-5">
            <CowList />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <CowForm />
          </div>
        </div>
      </Fragment>
    );
  }
}
