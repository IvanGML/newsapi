const handlers = require('../handlers');
const news = require('../data/news');

const routes = (app) => {
    app.get('/', (req, res) => {
        // imitation of error
        // throw new Error('woops');
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
        .get('/news/:id', handlers.getPostByID)
        .post('/news/:id', handlers.setPost)
        .put('/news/:id', handlers.udatePostByID)
        .delete('/news/:id', handlers.deletePost);
}

module.exports = routes;