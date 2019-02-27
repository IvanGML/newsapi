import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsItem } from "../modeles/news-item.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class OwnnewsService {
  NewsItemsUrl: string = `http://localhost:4000/news/`;

  constructor(private http: HttpClient) { }

  // Get News from own server
  getNewsList(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.NewsItemsUrl);
  }
  // Post news to own server
  // @newPost: news object 
  addNews(newPost: NewsItem): Observable<NewsItem[]> {
    return this.http.post<NewsItem[]>(this.NewsItemsUrl, newPost, httpOptions);
  }
  // Delete news
  // @newPost: news object 
  deleteNews(newPost: NewsItem): Observable<NewsItem[]> {
    return this.http.delete<NewsItem[]>(this.NewsItemsUrl + newPost._id, httpOptions);
  }
  // Update news
  // @newPost: news object 
  updateNews(newPost: NewsItem): Observable<NewsItem[]> {
    return this.http.put<NewsItem[]>(this.NewsItemsUrl + newPost._id, newPost);
  }
}
