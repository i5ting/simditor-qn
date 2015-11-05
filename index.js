var express = require('express');
var router = express.Router();

var multer  = require('multer');

module.exports = function (app, cfg){
  console.log(cfg);
  var upload = multer(cfg.multer);
  var upload_action = require('./upload')(cfg); 
  
  app.post('/simditor/upload', upload.single('file'), upload_action);
}
