module.exports = {
	css: {
		files: '_src/sass/**/*.scss', 
		tasks: ['sass', 'cssmin'],
	},
	images: {
		files: '_src/img/**/*.{png,jpg,gif,svg}',
		tasks: ['newer:imagemin:dynamic'],
	},
	uglify: {
		files: '_src/js/**/*.js',
		tasks: ['concat']
	}
}