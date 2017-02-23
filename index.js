'use strict';

var cling = require('clingy');
var React = require('react');

var Clingy = React.createClass({

	displayName: 'Clingy',

	propTypes: {
		children: React.PropTypes.node,
		target: React.PropTypes.instanceOf(Node),
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
