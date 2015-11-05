var express = require('express');
var router = express.Router();

var multer  = require('multer');

module.exports = function (app, cfg){
  var upload = multer(cfg.multer);
  var upload_action = require('./upload')(cfg.qn); 
  
  app.post('/', upload.single('file'), upload_action);
}
