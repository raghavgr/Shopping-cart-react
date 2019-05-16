import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
    // Automatic semicolon insertion.
    // In js if you have return and nothing next to it, a semicolon is added automatically.
    // That's why create long JSX expressions with parentheses

    // React.Fragment can be used to specify a component to be the child of another element
    // Especially if thr parent is also another div, it is not needed to use another div
    // within the component
  }
}

export default Counter;
