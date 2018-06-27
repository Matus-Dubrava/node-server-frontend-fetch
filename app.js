const express = require('express');
const path = require('path');

const userData = require('./user-data/users.js').users;

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get(/^\/(\d+)$/, (req, res) => {
  const userId = Number(req.params[0]);
  const user = userData.find(v => v.id === userId);
  user
    ? res.json(user)
    : res.json({ name: 'no such person' });
});

app.use((req, res, next) => {
  app.render('404');
  next();
});

app.listen(port);
