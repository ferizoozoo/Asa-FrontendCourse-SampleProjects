import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  constructor() {
    super();

    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  state = {
    counters: [
      { id: 1, title: "xbox", value: 0 },
      { id: 2, title: "ps4", value: 0 },
      { id: 3, title: "ps5", value: 0 },
    ],
  };

  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== id),
    });
  };

  handleValueChanged = (id, value) => {
    const newCounters = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value += value;
      }
      return c;
    });
    this.setState({
      counters: newCounters,
    });
  };

  getTotalCount = () => {
    return this.state.counters.filter((c) => c.value > 0).length;
  };

  render() {
    console.log("App - Rendered");
    return (
      <>
        <Navbar totalCount={this.getTotalCount()} />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onValueChanged={this.handleValueChanged}
        />
      </>
    );
  }
}

export default App;
