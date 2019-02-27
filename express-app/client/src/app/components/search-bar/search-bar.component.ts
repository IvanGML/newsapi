import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiService } from "../../sevices/newsapi.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() isChecked: EventEmitter<boolean> = new EventEmitter();
  @Output() id: EventEmitter<any> = new EventEmitter();
  sourceId: string;
  sourcesList: any;

  constructor(
    private router: Router,
    private newsapiService: NewsapiService,
    ) { }

  ngOnInit() {
    this.sourceId = 'all sources';
    this.newsapiService.getSourcesList().subscribe(result => {
      if(result && result.status === 'ok') {
        this.sourcesList = result.sources;
      }
    })
  }

  getId(id) {
    this.sourceId = id;
    this.id.emit(this.sourceId);
  }

  onlyCreatedByMe(event) {
    this.isChecked.emit(event.target.checked);
  }

  addArticle() {
    this.router.navigate(['/add-news']);
  }

}
