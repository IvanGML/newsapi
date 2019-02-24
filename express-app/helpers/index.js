const findById = (arr, id) => arr.find(item => item.id == id);

const newSchema = body => (new NewsPost({
    source: {
        id: body.source.id,
        name: body.source.name
    },
    author: body.author,
    title: body.title,
    description: body.description,
    url: body.url,
    urlToImage: body.urlToImage,
    publishedAt: body.publishedAt,
    content: body.content,
}));

module.exports = {
    findById,
    newSchema,
};
