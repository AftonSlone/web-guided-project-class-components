import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.input);
    // console.log(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          onChange={this.handleChanges}
          value={this.state.input}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
