import React, { Component } from "react";
import Navigation from "./Shared/Navigation";
import "../style/index.scss";
class Index extends Component {
  render() {
    return (
      <>
        <Navigation />
        <h1>Hello World en al</h1>
      </>
    );
  }
}

Index.propTypes = {};

export default Index;
