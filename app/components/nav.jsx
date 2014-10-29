var React = require('react')
	, Router = require('react-router-component')
	, Link = Router.Link

var Nav = React.createClass({
	render: function() {
		return (
			<ul className="nav">
				<li className="nav__item"><Link href="/">Home</Link></li>
				<li className="nav__item"><Link href="/users/ross">User page</Link></li>
				<li className="nav__item"><Link href="/todo">Todo</Link></li>
			</ul>
		)
	}
})

module.exports = Nav
