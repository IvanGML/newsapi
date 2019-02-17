import { formatDate } from '../stuff/helpers';

export const articleComponent = ({ title, author, publishedAt, description, content, url, urlToImage }) => {
    title = title || 'Title is not found',
    author = author || 'Author is not specified',
    publishedAt = publishedAt || 'Date in not specified',
    description = description || '',
    content = content || 'Content is not specified',
    url = url || '#',
    urlToImage = urlToImage || 'src/img/default-image.png'
    let imgAlt = description.split(' ').slice(0, 3).join(' ');
    publishedAt = publishedAt === 'Date in not specified' ? `Published at ${publishedAt}` : `Published at ${formatDate(publishedAt)}`;
    return (
        `<article class="article">
            <h2 class="article-header">${title}</h2>
            <div class="article-content-wrapper">
                <div class="article-content-text">
                    <div class="article-info">
                        <p class="article-author">${author}</p>
                        <p class="article-date">${publishedAt}</p>
                    </div>
                    <p class="article-discription">${description}</p>
                    <p class="article-text">${content}</p>
                    <a href="${url}" class="article-link" target="_blank">Read more...</a>
                </div>
                <div class="article-content-img">
                    <img src="${urlToImage}" alt="${imgAlt}" class="article-image">
                </div>
            </div>
        </article>`
    );
};
