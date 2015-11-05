var express = require('express');
var app = express();

var config = require('../simditor_qn');

console.log(config);

// require('../index')(app, config);

require('../')(app, config);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});