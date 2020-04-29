import {Injectable} from '@angular/core';
import {Article, RawArticle} from './article.entity';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleUseCases {
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
