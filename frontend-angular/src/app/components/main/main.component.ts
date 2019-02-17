import { Component, OnInit } from '@angular/core';
import { FetchedNewsItem } from "../../modeles/fetch-news.model";
import { NewsapiService } from "../../sevices/newsapi.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  newsItemList: FetchedNewsItem[];
  sources:string = 'all sources';

  constructor(private newsapiService:NewsapiService) { }

  ngOnInit() {
    this.newsapiService.getNewsList().subscribe( result => {
        this.newsItemList = result;
      });
  }

}
