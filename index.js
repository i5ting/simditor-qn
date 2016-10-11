var router = require('koa-router')();
var multer = require('koa-multer');

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
  
  router.post(cfg.path, upload.single(cfg.fileKey), upload_action);

  console.dir(router.stack)  
  console.log(app)
  app.use(router.routes()).use(router.allowedMethods());
}
