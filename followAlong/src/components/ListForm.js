import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  handleChanges = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    //add in user input
    this.props.handleItemAdd();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;