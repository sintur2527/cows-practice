import React, { Component, Fragment } from 'react';
import Details from './Details.jsx';
import CowForm from './CowForm.jsx';
import CowList from './CowList.jsx';
import getCows from './lib/getCows.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    getCows.get().then(({ data }) => {
      this.setState({
        data,
      });
    });
  }

  render() {
    let cowList = this.state.data || [];

    return (
      <Fragment>
        <div className="row">
          <div className="col-md-7">
            <Details />
          </div>
          <div className="col-md-5">
            <CowList cows={cowList} />
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
