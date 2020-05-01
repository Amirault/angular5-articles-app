import { Article, RawArticle } from "./article.entity";
import { Observable } from "rxjs";
import { ArticleSource } from "./article.source";

export class ArticleUseCases {
  constructor(private readonly articleSource: ArticleSource) {}

  public create(newArticle: RawArticle): Observable<Article> {
    return this.articleSource.create(newArticle);
  }

  public read(id: number): Observable<Article> {
    return this.articleSource.read(id);
  }

  public readAll(): Observable<Article[]> {
    return this.articleSource.readAll();
  }

  public delete(id: number): Observable<any> {
    return this.articleSource.delete(id);
  }
}
