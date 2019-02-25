import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sources: string = 'all sources';
  @Input() newsItemList;

  constructor() { }

  ngOnInit() { }

}
