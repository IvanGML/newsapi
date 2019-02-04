const findById = (arr, id) => arr.find(item => item.id == id);

const newSchema = body => (new NewsPost({
    name: body.name,
    description: body.description,
    url: body.url,
    category: body.category,
    language: body.language,
    country: body.country,
}));

module.exports = {
    findById,
    newSchema,
};
