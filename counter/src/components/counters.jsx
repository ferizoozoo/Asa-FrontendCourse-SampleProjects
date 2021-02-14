import React, { Component, useContext } from "react";
import Counter from "./counter";
import AppContext from "../App";

const Counters = () => {
  const value = useContext(AppContext);
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
};

export default Counters;
