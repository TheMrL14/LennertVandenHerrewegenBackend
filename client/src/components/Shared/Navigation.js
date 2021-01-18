import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="bg" expand="lg">
        <Navbar.Brand href="/" bg="Primary">
          Belgium Movie Club
        </Navbar.Brand>
      </Navbar>
    );
  }
}

Navigation.propTypes = {};

export default Navigation;
