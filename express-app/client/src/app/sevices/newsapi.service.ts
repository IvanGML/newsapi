import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  NewsItemsUrl: string = 'https://newsapi.org/v2/top-headlines?country=us&';
  ApiKey: string = 'apiKey=f792cbef6ef14ad0b093ab88c321ea24';
  NewsItemsUrlWithSources: string = 'https://newsapi.org/v2/top-headlines?sources=';
  SourcesListUrl: string = 'https://newsapi.org/v2/sources?';

  constructor(private http: HttpClient) { }

  // Get News
  getNewsList(sources): Observable<any> {
    // Get news by sources
    if (sources) return this.http.get<any>(`${this.NewsItemsUrlWithSources}${sources}&${this.ApiKey}`);
    return this.http.get<any>(`${this.NewsItemsUrl}${this.ApiKey}`);
  }

  // Get sources list
  getSourcesList(): Observable<any> {
    return this.http.get<any>(`${this.SourcesListUrl}${this.ApiKey}`);
  }

}
