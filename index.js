var express = require('express');
var router = express.Router();

var multer  = require('multer');

module.exports = function (app, cfg){
  // console.log(cfg);
  var upload = multer(cfg.multer);
  var upload_action = require('./upload')(cfg); 
  
  if(!cfg.path){
    cfg.path = '/simditor/upload';
  }
  
  if(!cfg.fileKey){
    cfg.fileKey = 'file';
  }
  
  app.post(cfg.path, upload.single(cfg.fileKey), upload_action);
}
