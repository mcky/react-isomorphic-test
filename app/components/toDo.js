/** @jsx React.DOM */
var React = require('react')

var TodoList = React.createClass({displayName: 'TodoList',
	render: function() {
		var createItem = function(itemText) {
			return React.DOM.li(null, itemText)
		}
		return React.DOM.ul(null, this.props.items.map(createItem))
	}
})

var TodoApp = React.createClass({displayName: 'TodoApp',
	getInitialState: function() {
		return this.props.data
	},
	componentDidMount: function() {
		socket.on('todo:recieve', this.initialize);
	},
	onChange: function(e) {
		this.setState({text: e.target.value})
	},
	initialize: function(data){
		this.setState({items: data})
	},
	handleSubmit: function(e) {
		e.preventDefault()
		var todoText = this.state.text
			,nextItems
		if (todoText !== '') {
			nextItems = this.state.items.concat([{'itemText': todoText}])
			this.setState({items: nextItems, text: ''})
			socket.emit('todo:send', nextItems)
		}
	},
	render: function() {
		return (
			React.DOM.div(null, 
				React.DOM.h1(null, "Todos"), 
				TodoList({items: this.state.items}), 
				React.DOM.form({onSubmit: this.handleSubmit}, 
					React.DOM.input({onChange: this.onChange, value: this.state.text}), 
					React.DOM.button(null, "Add new")
				), 
				React.DOM.span(null, "Total items: ", this.state.items.length)
			)
		)
	}
})

module.exports = TodoApp
