module.exports = (app, config) => {
  app.get('/users', (req, res) => {
    res.render('users', { title: config.title, pageBanner: 'Users' });
  })
}
