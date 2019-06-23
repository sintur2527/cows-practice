import React, { Component, Fragment } from 'react';

export default class CowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label for="cowName">Cow Name</label>
            <input
              type="text"
              className="form-control col-sm-3"
              id="cowName"
              placeholder="Enter cow name"
            />
          </div>
          <div className="form-group">
            <label for="cowDescription">Cow Description</label>
            <textarea
              className="form-control col-sm-3"
              id="cowDescription"
              placeholder="Enter description"
              rows="3"
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
