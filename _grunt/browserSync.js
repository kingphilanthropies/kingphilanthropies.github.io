module.exports = {
  dev: {
    bsFiles: {
      src : 'dist/css/style.css'
    },
    options: {
      watchTask: true,
      proxy: "uplift.dev:8888"
    }
  }
}