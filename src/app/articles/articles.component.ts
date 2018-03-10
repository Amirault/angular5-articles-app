import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _articles : Observable<Article[]>;

  constructor(private articleService: ArticleService) {
  }

  articles(): Observable<Article[]> {
    return this._articles;
  }

  ngOnInit() {
    this._articles = this.articleService.get();
  }

  delete(article: Article){
    this.articleService.delete(article.id).subscribe(()=>{
      this._articles = this.articleService.get();
    });
  }

  newArticle(article: Article){
    this._articles = this.articleService.get();
  }

}
