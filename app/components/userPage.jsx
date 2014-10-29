var React = require('react')

var UserPage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.username}</h1>
				Hello, this is the user page for {this.props.username}
			</div>
		)
	}
})

module.exports = UserPage
