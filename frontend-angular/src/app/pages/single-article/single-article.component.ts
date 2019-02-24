import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from "../../modeles/news-item.model";
import { ActivatedRoute, Router } from '@angular/router';
import { NewsapiService } from "../../sevices/newsapi.service";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {
  @Input() newsItem: NewsItem;
  newsId: string = '';
  param: any = '';
  isSingleArticle: boolean = true;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsapiService:NewsapiService
  ) {
    route.params.subscribe(param => this.param = param)
  }

  ngOnInit() {
    this.newsapiService.getNewsList().subscribe( result => {
      this.newsItem = result.articles.filter(item => item.source.id === this.param.id)[0];
      console.log('this.newsItem', this.newsItem);
    });
  }

}
