import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsItem } from "../modeles/news-item.model";

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
}
