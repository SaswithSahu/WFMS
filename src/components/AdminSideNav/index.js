// Sidebar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import './index.css'; // Import your custom styles

class AdminSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: 'dashboard',
    };
  }

  handleOptionClick = (option) => {
    this.setState({
      activeOption: option,
    });
  };

  render() {
    const { activeOption } = this.state;

    const sidebarOptions = [
      'dashboard',
      'food donors',
      'food receiving',
      'list of foods',
      'food request',
      'pages',
      'stats',
    ];

    return (
      <div className="sidebar">
        {sidebarOptions.map((option) => (
          <Link
            key={option}
            to={`/${option.replace(/\s+/g, '-').toLowerCase()}`} // Generate a simple URL-friendly link
            className={`sidebar-option ${activeOption === option ? 'active' : ''}`}
            onClick={() => this.handleOptionClick(option)}
          >
            {option}
          </Link>
        ))}
      </div>
    );
  }
}

export default AdminSidebar;
