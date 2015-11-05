# simditor-qn
express route


config = {
	multer:{ 
	 	dest: 'uploads/' 
	},
	qn:{
		accessKey: 'PqLfYe68_HKhnCL0qszXD4xRFj57U8cnBASJN0x7',
		secretKey: 'KFjdvN4aOmqQG_lV2YViY7tHPZOKROA8cmK7J5CH',
		bucket: 'mengxiaoban',
		origin: 'http://{bucket}.u.qiniudn.com',
		// timeout: 3600000, // default rpc timeout: one hour, optional
		// if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/`
		// uploadURL: 'http://up.qiniu.com/',
	},
	url:function(result){
		return "http://img.mengxiaoban.cn/" + result.hash;
	}
}