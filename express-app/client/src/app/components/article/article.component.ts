import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from "../../modeles/news-item.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Input()isSingleArticle: false;
  
  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  editNews(newsItem) {
    let newsItemId = newsItem.id || newsItem.source.id
    this.router.navigate(['./news/' + newsItemId]);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}