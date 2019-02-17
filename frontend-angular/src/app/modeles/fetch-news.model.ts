import { NewsItem } from "./news-item.model";

export interface FetchedNewsItem {
    articles: NewsItem,
    status: string,
    totalResults: number,
}