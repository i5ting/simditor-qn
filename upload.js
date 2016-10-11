var qn = require('qn');

function middleware(config) {
	var client = qn.create(config.qn);
	var token = client.uploadToken();

	return function (ctx, next) {
    if (!ctx.req.file || !ctx.req.file.path) {
			return ctx.body = {
				success: false,
				msg: 'req.file.path is not exist!'
			}
    }
		var filepath = ctx.req.file.path;
    
    return new Promise((resolve, reject) => {
  		client.uploadFile(filepath, {}, function (err, result) {
        console.log(ctx)
        console.log(result)
          
  			// {
  			//   hash: 'FhGbwBlFASLrZp2d16Am2bP5A9Ut',
  			//   key: 'qn/lib/client.js',
  			//   url: 'http://qtestbucket.qiniudn.com/qn/lib/client.js'
  			//   "x:ctime": "1378150371",
  			//   "x:filename": "client.js",
  			//   "x:mtime": "1378150359",
  			//   "x:size": "21944",
  			// }
  			if (err) {
  				console.log(err);
  				ctx.body = {
  					success: false,
  					msg: 'upload failed',
            err: err
  				}
          
          reject()
  			} else {
  				var url = config.url(result);
          console.log('url = ' + url)
        
          console.log({
  					success: true,
  					msg: 'upload sucess',
  					file_path: url
  				})
  				ctx.body = {
  					success: true,
  					msg: 'upload sucess',
  					file_path: url
  				}
          
          resolve()
  			}
  		});
    });
	}
}

module.exports = middleware;
