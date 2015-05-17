import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    // picking the count property of this object and
    // storing it in separate property called count
    return count === 0 ? <h1>Zero</h1> : count;

    // can return JSx expression, the html code above
    // JSx are normal javaScript objects, they can be passed to a function
    // returned from a function, and also define them as const variable
  }
}

export default Counter;
