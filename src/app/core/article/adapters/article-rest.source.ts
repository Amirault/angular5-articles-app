import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleSource } from "../domain/article.source";
import { Article, ArticleId, RawArticle } from "../domain/article.entity";

@Injectable()
export class ArticleRestSource implements ArticleSource {
  constructor(
    private readonly http: HttpClient,
    private readonly baseUrl: string
  ) {}

  public create(newArticle: RawArticle): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}/articles/`, newArticle);
  }

  public read(id: ArticleId): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`);
  }

  public readAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  public delete(id: ArticleId): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/articles/${id}`);
  }
}
