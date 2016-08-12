module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1,
    sourceMap: true
  },
  target: {
    files: {
      'assets/css/style.min.css': ['assets/css/style.css']
    }
  }
}