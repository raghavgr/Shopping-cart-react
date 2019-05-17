import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

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
