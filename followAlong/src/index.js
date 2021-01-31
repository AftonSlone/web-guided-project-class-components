import React from "react";
import ReactDOM from "react-dom";

import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";
import "./styles.scss";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false,
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false,
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false,
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false,
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false,
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false,
  },
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries: groceries,
    };
  }

  toggleItem = (itemId) => {
    this.setState({
      groceries: this.state.groceries.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased,
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearItems = () => {
    this.setState({
      groceries: this.state.groceries.filter((item) => !item.purchased),
    });
  };
  // Class methods to update state

  addItem = (newItem) => {
    this.setState({
      groceries: [
        ...this.state.groceries,
        {
          name: newItem,
          id: Date.now(),
          purchased: false,
        },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList
          clearItems={this.clearItems}
          toggleItem={this.toggleItem}
          groceries={this.state.groceries}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
