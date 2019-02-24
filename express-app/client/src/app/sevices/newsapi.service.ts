import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FetchedNewsItem } from "../modeles/fetch-news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  NewsItemsUrl: string = `https://newsapi.org/v2/top-headlines?country=us&apiKey=`;
  ApiKey: string = 'f792cbef6ef14ad0b093ab88c321ea24';

  constructor(private http: HttpClient) { }
  
  // Get News
  getNewsList(): Observable<FetchedNewsItem[]> {
    return this.http.get<FetchedNewsItem[]>(`${this.NewsItemsUrl}${this.ApiKey}`);
  }


}
