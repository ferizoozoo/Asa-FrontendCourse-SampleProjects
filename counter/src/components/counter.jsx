import React, { Component, useContext } from "react";
import AppContext from "../App";

class Counter extends Component {
  componentDidUpdate() {
    console.log("Counter - Updated");
  }

  render() {
    console.log("Counter - Rendered");
    const { counter, onChangeValue, onDelete, children } = this.props;
    const value = useContext(AppContext);

    return (
      <div>
        {children}
        <span style={{ color: counter.value === 0 ? "red" : "black" }}>
          {counter.value}
        </span>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={() => onChangeValue(counter.id, 1)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-danger"
          disabled={counter.value === 0}
          onClick={() => onChangeValue(counter.id, -1)}
        >
          -
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
