const express = require('express');
const news = require('./data/news.json');
const routes = require('./routes');
const midlewares = require('./midlewares');

const app = express();

midlewares(app);

app.use(express.static(__dirname + '/public'));

routes(app, news);

app.use((err, req, res) => {
    res.status(500);
    res.render('error', { error: err });
});

let port = +(process.env.PORT || 4000);

app.listen(port, () => console.log(`Express server working now on http://localhost:${port}`));
