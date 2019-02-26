import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() isChecked: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  onlyCreatedByMe(event) {
    this.isChecked.emit(event.target.checked);
  }

  addArticle() {
    this.router.navigate(['/add-news']);
  }

}
