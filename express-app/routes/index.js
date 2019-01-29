const handlers = require('../handlers');

const routes = (app) => {
    app.get('/', handlers.getHomePagaData);
    app.get('/news', handlers.getData);
    app
        .get('/news/:id', handlers.getPostByID)
        .post('/news/:id', handlers.setPost)
        .put('/news/:id', handlers.udatePostByID)
        .delete('/news/:id', handlers.deletePost)
        // in case of any route get error
        .use((err, req, res) => {
            res.status(500);
            res.render('error', { error: err });
        });

};

module.exports = routes;