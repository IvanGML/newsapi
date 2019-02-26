import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../modeles/news-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  newsItem: NewsItem[];
  formSubmitted: boolean;

  constructor(private router: Router) { }


  ngOnInit() {
    this.formSubmitted = false;
    this.newsItem = {
      id: '',
      source: {
        id: 'IvanSomau',
        name: 'created by me',
      },
      author: '',
      content: '',
      description: '',
      publishedAt: '',
      title: '',
      url: '',
      urlToImage: '',
    }

  }

  save() {
    console.log(this.newsItem);
  }

  toHome() {
    let isCancel = confirm('Are you sure?');
    if (isCancel) this.router.navigate(['/']);
  }

  onSubmitted() {
    this.formSubmitted = true;
    console.log('submitted', this.formSubmitted);
  }


}
