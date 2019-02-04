const NewsPost = require('../routes/api/news');
const { newSchema } = require('../helpers');

const handlers = {
    getHomePageData: (req, res) => {
        NewsPost
            .find()
            .then(news => {
                res.render('index',
                    {
                        title: 'news server',
                        news,
                    }
                );
            });
    },
    getData: (req, res) => {
        NewsPost.find()
            .then(items => res.json(items));
    },
    setBigData: (req, res) => {
        const newItem = req.body.map(item => {
            return newSchema(item);
        });
        newItem.forEach(post => {
            post.save()
                .then(item => res.json(item))
                .catch(err => console.log(err));
        });
    },
    setData: (req, res) => {
        const newItem = newSchema(req.body);
        newItem.save()
            .then(item => res.json(item))
            .catch(err => console.log(err));
    },
    getPostByID: (req, res) => {
        NewsPost.findById(req.params.id)
            .then(items => res.json(items))
            .catch(err => console.log(err));
    },
    deletePost: (req, res) => {
        NewsPost.findById(req.params.id)
            .then(item => item.remove()
                .then(() => res.json({ success: true })))
            .catch(err => res.status(404)
                .then(() => res.json({ success: false})))
    }
};


module.exports = handlers;
