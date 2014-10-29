var React = require('react')
	, Router = require('react-router-component')
	, toDo = require('./toDo')
	, Locations = Router.Locations
	, Location = Router.Location
	, Link = Router.Link

var UserPage = require('./userPage')
var MainPage = require('./mainPage')

var App = React.createClass({
	getInitialState: function() {
		if (typeof window !== 'undefined') {
			this.props.data = data
		}
		return null
	},
	render: function() {
		return (
			<Locations path={this.props.path}>
				<Location path="/" handler={MainPage} foo="bar" />
				<Location path="/todo" handler={toDo} data={this.props.data}/>
				<Location path="/users/:username" handler={UserPage} />
			</Locations>
		)
	}
})

module.exports = App
