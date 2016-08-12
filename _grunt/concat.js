module.exports = {
	options: {
		separator: ';',
	},
	dist: {
		src: ['_src/js/lib/jquery.min.js', '_src/js/lib/jqueryui.min.js', '_src/js/lib/slick.js', '_src/js/lib/blazy.js', '_src/js/main.js'],
		dest: '_src/js/application.js',
	},
}