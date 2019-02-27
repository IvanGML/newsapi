import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from "../../modeles/news-item.model";
import { Router } from '@angular/router';
import { OwnnewsService } from "../../sevices/ownnews.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() newsItem: NewsItem;
  @Input()isSingleArticle: false;
  
  constructor(
    private router: Router,
    private ownnewsService:OwnnewsService 
  ) {}

  ngOnInit() {
    
  }

  openNews(newsItem) {
    let newsItemId = newsItem.id || newsItem.source.id
    this.router.navigate(['./news/' + newsItemId]);
  }

  edit() {
    alert('this functionality is not yet implemented');
  }

  delete(newsItem) {
    console.log('newsItem', newsItem);
    let isDelete = confirm('You really want delete this news post?');
    if (isDelete) {
      this.ownnewsService.deleteNews(newsItem).subscribe();
    }
    alert('Deleted.');
    this.router.navigate(['/']);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}