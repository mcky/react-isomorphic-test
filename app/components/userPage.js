/** @jsx React.DOM */
var React = require('react')

var UserPage = React.createClass({displayName: 'UserPage',
	render: function() {
		return (
			React.DOM.div(null, 
				React.DOM.h1(null, this.props.username), 
				"Hello, this is the user page for ", this.props.username
			)
		)
	}
})

module.exports = UserPage
