import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <input type="text" placeholder="Enter cow name" />
          <input type="text" placeholder="Enter description" />
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default App;
