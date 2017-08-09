// Routes
module.exports = (app, config) => {
  app.get('/', function (req, res) {
    res.render('index', { title: config.title, message: 'Hello there!' })
  });
  require('./users')(app, config);


  app.get('/admin', function (req, res) {
    res.render('admin', { title: config.title, pageBanner: 'Admin' })
  });
  app.get('/music', function (req, res) {
    res.render('music', { title: config.title, pageBanner: 'Music' })
  });
  app.get('/machinelearning', function (req, res) {
    res.render('machinelearning', { title: config.title, pageBanner: 'Machine Learning' })
  });

}
