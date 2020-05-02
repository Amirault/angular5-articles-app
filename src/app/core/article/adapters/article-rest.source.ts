import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticleSource } from "../domain/article.source";
import { Article, RawArticle } from "../domain/article.entity";

@Injectable()
export class ArticleRestSource implements ArticleSource {
  private readonly baseUrl =
    "https://my-json-server.typicode.com/amirault/angular5-articles-app";

  constructor(private http: HttpClient) {}

  public create(newArticle: RawArticle): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}/articles/`, newArticle);
  }

  public read(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`);
  }

  public readAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/articles/${id}`);
  }
}
