import cling from "clingy";
import PropTypes from "prop-types";
import React from "react";
import { findDOMNode } from "react-dom";

class Clingy extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    target: PropTypes.instanceOf(Node).isRequired
  };

  componentDidMount() {
    this.createCling();
  }

  componentDidUpdate() {
    this.destroyCling();
    this.createCling();
  }

  componentWillUnmount() {
    this.destroyCling();
  }

  createCling() {
    const node = findDOMNode(this);

    if (node) {
      this.cling = cling(node, this.props.target, this.props);
    }
  }

  destroyCling() {
    if (this.cling && !this.cling.isDestroyed()) {
      this.cling.destroy();
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default Clingy;
