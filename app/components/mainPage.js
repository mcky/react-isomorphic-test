/** @jsx React.DOM */
var React = require('react')

var MainPage = React.createClass({displayName: 'MainPage',
	render: function() {
		return (
			React.DOM.div(null, 
				React.DOM.h1(null, "Home"), 
				"Hello, this is main page of the application!"
			)
		)
	}
})

module.exports = MainPage
