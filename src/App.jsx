import React, { Component, Fragment } from 'react';
import Details from './Details.jsx';
import CowForm from './CowForm.jsx';
import CowList from './CowList.jsx';
import getCows from './lib/getCows.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCow: null,
    };
    this.handleCowClick = this.handleCowClick.bind(this);
  }

  componentDidMount() {
    getCows.get().then(({ data }) => {
      this.setState({
        data,
      });
    });
  }

  handleCowClick(cow) {
    this.setState({
      currentCow: cow,
    });
  }

  render() {
    let cowList = this.state.data || [];

    return (
      <Fragment>
        <div className="row align-items-start">
          <div className="col-md-5">
            <CowForm />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5">
            <CowList handleCowClick={this.handleCowClick} cows={cowList} />
          </div>
          <div className="col-md-7">
            <Details cow={this.state.currentCow} />
          </div>
        </div>
      </Fragment>
    );
  }
}
