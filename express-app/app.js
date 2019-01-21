const express = require('express');
const news = require('./data/news.json');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.engine('pug', require('pug').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// third party loger
// app.use(morgan('dev'));

// custom loger
app.use((req, res, next) => {
    let date = new Date(Date.now()).toLocaleString("en-US");
    console.log(`${date} === ${req.method} === ${req.url}`);
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index',
        {
            title: 'Local news server',
            news,
        }
    );
});

app.get('/news', (req, res) => {
    res.json(news);
});

app.get('/news/:id', (req, res) => {
    let newsList = news.find(item => item.id == req.params.id);
    if(!newsList) return res.status(404).send(`
        <h1 style='text-align: center'>Page with id ${req.params.id} not found ¯\\_(ツ)_/¯ </h1>`
    );
    res.json(newsList);
});

let port = +(process.env.PORT || 4000);

app.listen(port, () => console.log(`Express server working now on http://localhost:${port}`));
