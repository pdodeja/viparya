const express = require('express');
const app = express();

const helmet = require('helmet');


app.enable('trust proxy');
app.set('view engine', 'pug');
app.use(helmet());
app.use(express.static('public'))


app.get('/', function (req, res) {
  res.render('index', { title: 'Knowledge Empowers You', message: 'Hello there!' })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
