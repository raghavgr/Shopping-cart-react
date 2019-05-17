import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };
  // define styles property here
  // and reference them in the requried JSx expression
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  // can't use a class property in object becuase it is a reserved keyword in JS
  // hence we use className

  formatCount() {
    const { count } = this.state;
    // picking the count property of this object and
    // storing it in separate property called count
    return count === 0 ? "Zero" : count;

    // can return JSx expression, the html code above
    // JSx are normal javaScript objects, they can be passed to a function
    // returned from a function, and also define them as const variable
  }
}

export default Counter;
