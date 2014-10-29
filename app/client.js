var React = require('react')
	, App = require('./app')

window.React = React
window.App = App

React.renderComponent(App(data), document.getElementById('app'))
