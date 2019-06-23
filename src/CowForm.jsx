import React, { Component, Fragment } from 'react';
import Axios from 'axios';

export default class CowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    Axios.post('http://localhost:8000/api/cows', {
      name: this.state.name,
      description: this.state.description,
    }).then(res => {
      $('form :input').attr('value', '');
      console.log('Successful Post!');
    });
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="cowName">Cow Name</label>
            <input
              type="text"
              className="form-control"
              id="cowName"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Enter cow name"
            />
          </div>
          <div className="form-group">
            <label for="cowDescription">Cow Description</label>
            <input
              className="form-control"
              id="cowDescription"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Enter description"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}
