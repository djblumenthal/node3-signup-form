var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.send('<form method="post" action="/formsubmit">
 		<input name="email" type="email">
 		<input type="submit">
		</form>');

});

var server = app.listen(9657, function() {
	console.log('Express server listening on port ' + server.address().port);
});
