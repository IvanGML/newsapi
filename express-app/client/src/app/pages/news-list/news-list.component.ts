import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from "../../modeles/news-item.model";
import { NewsapiService } from "../../sevices/newsapi.service";
import { OwnnewsService } from "../../sevices/ownnews.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  myNewsItemList: any = this.myNewsItemList || [];
  thirdPartyNewsItemList: any = this.thirdPartyNewsItemList || [];
  newsItemList: any = this.newsItemList || [];
  // @Input() onLoadData: any = this.loadData;

  constructor(
    private newsapiService: NewsapiService,
    private ownnewsService: OwnnewsService
  ) { }

  ngOnInit() {
    this.loadData(null);
  }

  onlyCreatedByMe(event: boolean) {
    if(event) this.newsItemList = this.newsItemList.filter(item => !!item._id === event);
    else this.newsItemList = [...this.thirdPartyNewsItemList, ...this.myNewsItemList];
  }

  loadData(id) {
    this.newsapiService.getNewsList(id).subscribe(result => {
      result = result.articles.filter(item => item.source.id);
      this.thirdPartyNewsItemList = result;
      this.newsItemList = [...this.thirdPartyNewsItemList, ...this.myNewsItemList];
    });
    this.ownnewsService.getNewsList().subscribe(result => {
      this.myNewsItemList = result;
      this.newsItemList = [...this.thirdPartyNewsItemList, ...this.myNewsItemList];
    });
  }

}
