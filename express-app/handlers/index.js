const news = require('../data/news');
const { findById } = require('../helpers');

const handlers = {
    getHomePagaData: (req, res) => {
        // imitation of error
        // throw new Error('woops');
        res.render('index',
            {
                title: 'Local news server',
                news,
            }
        );
    },
    getData: (req, res) => {
        res.json(news);
    },
    getPostByID: (req, res) => {
        let newsList = findById(news, req.params.id);
        if(!newsList) return res.status(404).send(`
            <h1 style='text-align: center'>Page with id ${req.params.id} not found ¯\\_(ツ)_/¯ </h1>`
        );
        res.json(newsList);
    },
    setPost: (req, res) => {
        let updatedCustomer = req.body;
        if(req.body != null) {
            console.log("--->Created Successfully, customers: \n" + JSON.stringify(req.body, null, 4))
            res.end("Created Successfully! \n" + JSON.stringify(req.body, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    },
    udatePostByID: (req, res) => {
        let post = findById(news, req.params.id);
        let updatedCustomer = req.body;
        if(post != null) {
            post = {...post, ...updatedCustomer};
            console.log("--->Update Successfully, customers: \n" + JSON.stringify(post, null, 4))
            res.end("Update Successfully! \n" + JSON.stringify(post, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    },
    deletePost: (req, res) => {
        let post = findById(news, req.params.id);
        if(post != null) {
            // actions to delete 'post' from db
            console.log("--->Deleted Successfully, customers: \n" + JSON.stringify(post, null, 4))
            res.end("Deleted Successfully! \n" + JSON.stringify(post, null, 4));
        } else {
            res.end("Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4));
        }
    },
};


module.exports = handlers;
