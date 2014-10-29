var express = require('express')
	, hbs = require('hbs')
	, expstate = require('express-state')
	, React = require('react')
	, app = express()
	, http = require('http').Server(app)
	, io = require('socket.io')(http)
	, url = require('url')
	, nav = require('./components/nav')
	, reactApp = require('./app')
	, port = process.env.PORT || 3000

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

app.route('/*')
	.get(function(req, res){
		var path = url.parse(req.url).pathname
		res.expose({ data: data })
		res.render('index', {
			nav : React.renderComponentToString(nav()),
			react : React.renderComponentToString(reactApp({path: path, data: data}))
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


