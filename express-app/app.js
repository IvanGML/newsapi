const express = require('express');
const news = require('./data/news.json');
// const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

const findById = (arr, id) => arr.find(item => item.id == id);

app.engine('pug', require('pug').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// third party logger
// app.use(morgan('dev'));

// custom logger
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
        let newsList = findById(news, req.params.id);
        if(!newsList) return res.status(404).send(`
            <h1 style='text-align: center'>Page with id ${req.params.id} not found ¯\\_(ツ)_/¯ </h1>`
        );
        res.json(newsList);
    })
    .post('/news/:id', (req, res) => {
        let post = findById(news, req.params.id);
        let updatedCustomer = req.body;
        if(post != null) {
            post = {...post, ...updatedCustomer};
            console.log("--->Created Successfully, customers: \n" + JSON.stringify(post, null, 4))
            res.end("Created Successfully! \n" + JSON.stringify(post, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    })
    .put('/news/:id', (req, res) => {
        let post = findById(news, req.params.id);
        let updatedCustomer = req.body;
        if(post != null) {
            post = {...post, ...updatedCustomer};
            console.log("--->Update Successfully, customers: \n" + JSON.stringify(post, null, 4))
            res.end("Update Successfully! \n" + JSON.stringify(post, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    })
    .delete('/news/:id', (req, res) => {
        let post = findById(news, req.params.id);
        if(post != null) {
            // actions to delete 'post' from db
            console.log("--->Deleted Successfully, customers: \n" + JSON.stringify(post, null, 4))
            res.end("Deleted Successfully! \n" + JSON.stringify(post, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    });

let port = +(process.env.PORT || 4000);

app.listen(port, () => console.log(`Express server working now on http://localhost:${port}`));
