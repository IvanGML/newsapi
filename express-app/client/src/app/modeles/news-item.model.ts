interface NewsSource {
    id: string,
    name: string,
}

export interface NewsItem {
    id: string,
    source: NewsSource,
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    title: string,
    url: string,
    urlToImage: string,
}