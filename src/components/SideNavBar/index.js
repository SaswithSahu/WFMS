

import React, { Component } from 'react';
import './index.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFoodListOpen: false,
      isRequestListOpen: false,
    };
  }

  toggleFoodList = () => {
    this.setState((prevState) => ({
      isFoodListOpen: !prevState.isFoodListOpen
    }));
  };

  toggleRequestList = () => {
    this.setState((prevState) => ({
      isRequestListOpen: !prevState.isRequestListOpen
    }));
  };

  render() {
    const { isFoodListOpen, isRequestListOpen } = this.state;
    const foodList = ['Burger', 'Pizza', 'Pasta', 'Salad', 'Sushi'];
    const requestList = ['Request 1', 'Request 2', 'Request 3'];

    return (
      <div className={`sidebar ${isFoodListOpen || isRequestListOpen ? 'open' : ''}`}>
        <button onClick={this.toggleFoodList}>List Of Food Items</button>
        {isFoodListOpen && (
          <ul className="list">
            {foodList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <button onClick={this.toggleRequestList}> Requests</button>
        {isRequestListOpen && (
          <ul className="list">
            {requestList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Sidebar;
