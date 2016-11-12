function genUuid() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});

	return uuid;
}

gulp.task('uuid', function() {
	var n = args.n || 1;
	console.log("uuid:")
	for (var i = 0; i < n; i++) {
		console.log(genUuid());
	}
});

function getHash() {
	var key = "HwpGAejoUOPr6DbKBlvRILmsq4z7X3TCtky8NVd5iWE0ga2MchSZxfn1Y9JQuF";

	var result = [];
	var time = new Date().getTime();
	var rand = Math.random();

	var md5 = crypto.createHash('md5');
	md5.update('' + time + rand);
	var salt = md5.digest('hex');

	for (var i = 0; i < 4; i++) {
		var hex = 0x3FFFFFFF & parseInt(salt.substring(i * 8, 8), 16);
		var out = '';
		for (var j = 0; j < 6; j++) {
			var index = 0x0000003D & hex;
			out = out + key[index];
			hex = hex >> 5;
		}
		result.push(out);
	}

	return result[0];
}

gulp.task('hash', function() {
	var n = args.n || 1;
	console.log("hash:");
	for (var i = 0; i < n; i++) {
		console.log(getHash());
	}
});