var qn = require('qn');

var config = require('./simditor_qn');
var client = qn.create(config.qn);
var token = client.uploadToken();
var filepath = 'app.js'


client.uploadFile(filepath, {}, function (err, result) {
  console.log(err)
  console.log(result)
})
