import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleSource } from "../domain/article.source";
import { Article, RawArticle } from "../domain/article.entity";

@Injectable()
export class ArticleRestSource implements ArticleSource {
  constructor(private http: HttpClient) {}

  public create(newArticle: RawArticle): Observable<Article> {
    return this.http.post<Article>(
      "http://localhost:3000/articles/",
      newArticle
    );
  }

  public read(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public readAll(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/articles/${id}`);
  }
}
