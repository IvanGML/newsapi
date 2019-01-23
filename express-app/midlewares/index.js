const bodyParser = require('body-parser');
// const morgan = require('morgan');
const path = require('path');

const midlewares = app => {
    app.use(bodyParser());

    app.engine('pug', require('pug').__express);

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    // third party logger
    // app.use(morgan('dev'));

    // custom logger
    app.use((req, res, next) => {
        let date = new Date(Date.now()).toLocaleString("en-US");
        console.log(`${date} === ${req.method} === ${req.url}`);
        next();
    });

}

module.exports = midlewares;