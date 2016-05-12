var path = require('path')
var express = require('express')
var compression = require('compression')

var app = express()

// Enable gzip
app.use(compression())

// Serve dist
app.use(express.static(path.resolve(__dirname, '../dist')))

// View render
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// Render files
app.get('*', function (req, res) {
  res.render('index')
})

// Launch app
var server = app.listen((process.env.PORT || 9000), function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
