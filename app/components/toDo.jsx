var React = require('react')

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return <li>{itemText}</li>
		}
		return <ul>{this.props.items.map(createItem)}</ul>
	}
})

var TodoApp = React.createClass({
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
			<div>
				<h1>Todos</h1>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button>Add new</button>
				</form>
				<span>Total items: {this.state.items.length}</span>
			</div>
		)
	}
})

module.exports = TodoApp
