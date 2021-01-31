import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { counters, onDelete, onValueChanged } = this.props;
    return (
      <ul>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onChangeValue={onValueChanged}
          >
            <span className="m-2">{counter.title}</span>
          </Counter>
        ))}
      </ul>
    );
  }
}

export default Counters;
