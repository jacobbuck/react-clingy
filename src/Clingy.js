import cling from 'clingy';
import PropTypes from 'prop-types';
import React from 'react';

class Clingy extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    target: PropTypes.instanceOf(Node).isRequired,
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
    this.cling = cling(
      this.rootRef,
      this.props.target,
      this.props
    );
  }

  destroyCling() {
    if (this.cling && !this.cling.isDestroyed()) {
      this.cling.destroy();
    }
  }

  render() {
    return React.cloneElement(
      this.props.children,
      { ref: function(ref) { this.rootRef = ref; }.bind(this) }
    );
  }
}

export default Clingy;
