import { Article, RawArticle } from "./article.entity";
import { Observable } from "rxjs";

export abstract class ArticleSource {
  abstract create(newArticle: RawArticle): Observable<Article>;
  abstract read(id: number): Observable<Article>;
  abstract readAll(): Observable<Article[]>;
  abstract delete(id: number): Observable<any>;
}
