import {Injectable} from '@angular/core';
import {Article} from "../models/article";

@Injectable()
export class ArticleService {

  constructor() {
  }

  public getArticles(): Article[] {
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
}
