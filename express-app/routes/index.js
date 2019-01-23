const handlers = require('../handlers');

const routes = (app) => {
    app.get('/', handlers.getHomePagaData);
    app.get('/news', handlers.getData);
    app
        .get('/news/:id', handlers.getPostByID)
        .post('/news/:id', handlers.setPost)
        .put('/news/:id', handlers.udatePostByID)
        .delete('/news/:id', handlers.deletePost);
}

module.exports = routes;