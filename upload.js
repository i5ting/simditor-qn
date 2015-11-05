var multer = require('multer')
var qn = require('qn');

function m(config) {
	var upload = multer(config.multer)
	var client = qn.create(config.qn);
	var token = client.uploadToken();

	return function (req, res, next) {
		var filepath = req.file.path;
		client.uploadFile(filepath, {}, function (err, result) {
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
				res.json({
					success: false,
					msg: 'upload failed'
				})
			} else {
				var url = config.url(result);

				res.json({
					success: true,
					msg: 'upload sucess',
					file_path: url
				})
			}
		});
	}
}

module.exports = m;
