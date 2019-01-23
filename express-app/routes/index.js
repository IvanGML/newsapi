const { findById } = require('../helpers');

const routes = (app, news) => {
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
}

module.exports = routes;