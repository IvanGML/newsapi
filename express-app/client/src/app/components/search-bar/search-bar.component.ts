import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() isChecked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onlyCreatedByMe(event) {
    this.isChecked.emit(event.target.checked);
    // console.log('checked', this.isChecked);
  }

}
