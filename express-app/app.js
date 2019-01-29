const express = require('express');
const routes = require('./routes');
const middleware = require('./midlewares');

const app = express();

middleware(app);
routes(app);

let port = +(process.env.PORT || 4000);

app.listen(
        port, () =>
        console.log(`Express server working now on http://localhost:${port}`)
    );
