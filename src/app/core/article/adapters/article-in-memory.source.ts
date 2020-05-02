import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ArticleSource } from "../domain/article.source";
import { Article, ArticleId, RawArticle } from "../domain/article.entity";

@Injectable()
export class ArticleInMemorySource implements ArticleSource {
  private articles: Article[] = [];

  constructor() {}

  public create(rawArticle: RawArticle): Observable<Article> {
    const newArticle = {
      id: this.articles.length as ArticleId,
      ...rawArticle,
    };
    this.articles.push(newArticle);
    return of(newArticle);
  }

  public read(id: number): Observable<Article> {
    const article = this.articles.find((_) => _.id === id);
    if (article) {
      return of(article);
    } else {
      throw new Error(`article not found for id ${id}`);
    }
  }

  public readAll(): Observable<Article[]> {
    return of(this.articles);
  }

  public delete(id: number): Observable<any> {
    this.articles = this.articles.filter((_) => _.id !== id);
    return of(this.articles);
  }
}
