var React = require('react')
	, Route = require('./components/route')
	, Nav = require('./components/nav')

window.React = React

React.renderComponent(Route(), document.getElementById('app'))
React.renderComponent(Nav(), document.getElementById('nav'))
