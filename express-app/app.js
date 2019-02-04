const express = require('express');
const routes = require('./routes');
const middlewareContainer = require('./midlewares');
const mongoose = require('mongoose');

const app = express();


middlewareContainer(app);


// DB config
const database = require('./config/keys').mongoURI;

// connect to mongo
mongoose
    .connect(database)
    .then(() => console.log('mongo db connected.'))
    .catch(err => console.log(err.errmsg));

routes(app);

let port = +(process.env.PORT || 4000);

app.listen(
        port,
        () => console.log(`Express server working now on http://localhost:${port}`)
    );
