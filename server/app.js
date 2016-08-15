var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var adds = require('./routes/adds');
var subtracts = require('./routes/subtracts');
var divides = require('./routes/divides');
var multiplys = require('./routes/multiplys');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/adds', adds);
app.use('/subtracts', subtracts);
app.use('/divides', divides);
app.use('/multiplys', multiplys);




app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html'
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
