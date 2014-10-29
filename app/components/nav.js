/** @jsx React.DOM */
var React = require('react')
	, Router = require('react-router-component')
	, Link = Router.Link

var Nav = React.createClass({displayName: 'Nav',
	render: function() {
		return (
			React.DOM.ul({className: "nav"}, 
				React.DOM.li({className: "nav__item"}, Link({href: "/"}, "Home")), 
				React.DOM.li({className: "nav__item"}, Link({href: "/users/ross"}, "User page")), 
				React.DOM.li({className: "nav__item"}, Link({href: "/todo"}, "Todo"))
			)
		)
	}
})

module.exports = Nav
