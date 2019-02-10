const handlers = require('../handlers');

const routes = (app) => {
    app.get('/', handlers.getHomePageData);
    app.get('/news', handlers.getData)
       .post('/news', handlers.setData);
    app.post('/newsbigset', handlers.setBigData);
    app
        .get('/news/:id', handlers.getPostByID)
        .delete('/news/:id', handlers.deletePost)
        .put('/news/:id', handlers.udatePostByID);
    //     // in case of any route get error
    //     .use((err, req, res) => {
    //         res.status(500);
    //         res.render('error', { error: err });
    //     });

};

module.exports = routes;