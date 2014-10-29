var express = require('express')
	, hbs = require('hbs')
	, app = express()
	, expstate = require('express-state')
	, React = require('react')
	, reactApp = require('./app')
	, http = require('http').Server(app)
	, io = require('socket.io')(http)

var port = process.env.PORT || 3000
app.set('views', __dirname + '/views')
app.set('view options', { layout:'layout.html' })
app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.use(express.static(__dirname + '/public'))
expstate.extend(app)

var data = {
	items: [
		{'itemText': 'itemOne'},
		{'itemText': 'itemTwo'}
	],
	text: ''
}

app.route('/')
	.get(function(req, res){
		res.expose({ data: data })
		res.render('index', {
			react : React.renderComponentToString(reactApp(data))
		})
	})

io.on('connection', function(socket){
	console.log('a user connected')

	socket.on('todo:send', function(items){
		data.items = items
		socket.broadcast.emit('todo:recieve', data.items)
	})
})


http.listen(port, function(){
	console.log('listening on localhost:3000')
})


