import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from "../../modeles/news-item.model";
import { ActivatedRoute, Router } from '@angular/router';
import { NewsapiService } from "../../sevices/newsapi.service";
import { OwnnewsService } from "../../sevices/ownnews.service";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {
  @Input() newsItem: NewsItem;
  allItems: NewsItem[] = this.allItems || [];
  newsId: string = '';
  param: any = '';
  isSingleArticle: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsapiService: NewsapiService,
    private ownnewsService: OwnnewsService
  ) {
    route.params.subscribe(param => this.param = param)
  }

  ngOnInit() {

    this.newsapiService.getNewsList().subscribe(result => {
      this.allItems = [...this.allItems, ...result.articles];
      this.newsItem = this.allItems.filter(item => item.source.id === this.param.id)[0];
    })
    this.ownnewsService.getNewsList().subscribe(result => {
      this.allItems = [...this.allItems, ...result];
      this.newsItem = this.allItems.filter(item => item.source.id === this.param.id)[0];
    })

  };

}
