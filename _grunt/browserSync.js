module.exports = {
  dev: {
    bsFiles: {
      src : '_site/css/main.css'
    },
    options: {
      watchTask: true,
      proxy: "http://127.0.0.1:4000/"
    }
  }
}