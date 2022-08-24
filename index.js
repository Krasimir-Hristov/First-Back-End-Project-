const express = require('express');
const hbs = require('express-handlebars');
const { home } = require('./controllers/home');

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true}));
app.use('/static', express.static('static'));

app.get('/', home);

app.listen(3000, () => console.log('All good to server'))