const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');
const express = require('express');

const middleware = app => {
    app.use(express.static(__dirname + '/../public'));
    app.use(bodyParser());
    app.engine('pug', require('pug').__express);
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
    // create a rotating write stream
    var accessLogStream = rfs('access.log', {
        interval: '1d', // rotate daily
        path: path.join(__dirname, '../log')
    });
    // setup the third-party logger
    app.use(morgan('combined', { stream: accessLogStream }));

    // custom logger
    // app.use((req, res, next) => {
    //     let date = new Date(Date.now()).toLocaleString("en-US");
    //     console.log(`${date} === ${req.method} === ${req.url}`);
    //     next();
    // });
};

module.exports = middleware;
