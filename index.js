'use strict';

var cling = require('clingy');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var React = require('react');

var Clingy = createReactClass({

  displayName: 'Clingy',

  propTypes: {
    children: PropTypes.node,
    target: PropTypes.instanceOf(Node),
  },

  componentDidMount: function() {
    this.createCling();
  },

  componentDidUpdate: function() {
    this.destroyCling();
    this.createCling();
  },

  componentWillUnmount: function() {
    this.destroyCling();
  },

  createCling: function() {
    this.cling = cling(
      this.rootRef,
      this.props.target,
      this.props
    );
  },

  destroyCling: function() {
    if (this.cling && !this.cling.isDestroyed()) {
      this.cling.destroy();
    }
  },

  render: function() {
    return React.cloneElement(
      this.props.children,
      { ref: function(ref) { this.rootRef = ref; }.bind(this) }
    );
  }

});

module.exports = Clingy;
