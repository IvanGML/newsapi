import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  goHome() {
    if(this.router.url==="/add-news") {
      let isCancel = confirm('Are you sure?');
      if (isCancel) this.router.navigate(['/']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
