var express = require('express')
var morgan = require('morgan')
var os = require('os')

var app = express()

app.use(morgan('combined'))

app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res) {
  res.send('hello, world! (' + os.hostname() + ')');
})


app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
