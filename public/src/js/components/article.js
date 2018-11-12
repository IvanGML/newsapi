export const articleComponent = ({title, author, publishedAt, description, content, url, urlToImage}) => {
  description = description || '';
  let descriptionArr = description.split(' ');
  descriptionArr.length = 3;
  let imgAlt = descriptionArr.join(' ');
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
