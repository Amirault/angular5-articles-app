import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor() {
  }

  articles(): Article[] {
    return [{
      title: 'My First Article',
      content: 'Hello World',
      authors: 'Orangefire'
    }, {
      title: 'Angular component',
      content: 'Angular component looks awesome!',
      authors: 'Orangefire'
    }, {
      title: 'Angular service',
      content: 'I read something about angular service, i will try it soon',
      authors: 'Orangefire'
    }];
  }

  ngOnInit() {
  }

}
