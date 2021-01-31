import React, { useState } from "react";

class Person extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>
          {this.props.name} is a great name! Never change {this.props.name}.
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Afton",
    };
  }

  changeName = () => {
    this.setState({
      name: "Shane",
    });
  };

  render() {
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.changeName}>Change to Different Name</button>
      </div>
    );
  }
}

export default App;
