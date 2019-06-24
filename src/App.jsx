import React, { Component, Fragment } from 'react';
import Details from './Details.jsx';
import CowForm from './CowForm.jsx';
import CowList from './CowList.jsx';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    Axios.get('http://localhost:8000/api/cows')
      .then(({ data }) => {
        this.setState({
          data,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let cowList = this.state.data || [];
    console.log('cowList', cowList);

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
