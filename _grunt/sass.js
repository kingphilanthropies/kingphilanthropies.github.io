module.exports = {
  compile: {
    options: {
      style: 'compressed',
      sourceMap: false
    },
    files: {
      'assets/css/style.css': '_src/sass/index.scss',
    }
  }
}