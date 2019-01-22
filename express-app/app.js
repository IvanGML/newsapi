const express = require('express');
const news = require('./data/news.json');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

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

app
    .get('/news/:id', (req, res) => {
        let newsList = news.find(item => item.id == req.params.id);
        if(!newsList) return res.status(404).send(`
            <h1 style='text-align: center'>Page with id ${req.params.id} not found ¯\\_(ツ)_/¯ </h1>`
        );
        res.json(newsList);
    })
    .put('/news/:id', (req, res) => {
        let post = news.find(item => item.id == req.params.id);
        let updatedCustomer = req.body;
        if(post != null) {
            post = {...post, ...updatedCustomer};
            console.log("--->Update Successfully, customers: \n" + JSON.stringify(post, null, 4))
            res.end("Update Successfully! \n" + JSON.stringify(post, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    });

let port = +(process.env.PORT || 4000);

app.listen(port, () => console.log(`Express server working now on http://localhost:${port}`));
