import { Article, ArticleId, RawArticle, toArticleId } from "./article.entity";
import { Observable, of } from "rxjs";
import { ArticleSource } from "./article.source";

export class ArticleUseCases {
  constructor(private readonly articleSource: ArticleSource) {}

  public create(newArticle: RawArticle): Observable<Article> {
    return this.articleSource.create(newArticle);
  }

  public read(id: string): Observable<Article | undefined> {
    const articleId = toArticleId(id);
    return articleId === undefined ? of() : this.articleSource.read(articleId);
  }

  public readAll(): Observable<Article[]> {
    return this.articleSource.readAll();
  }

  public delete(id: ArticleId): Observable<any> {
    return this.articleSource.delete(id);
  }
}
