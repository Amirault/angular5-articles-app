import { Component, OnInit } from "@angular/core";
import { Article } from "../../core/article/domain/article.entity";
import { ArticleUseCases } from "../../core/article/domain/article.usecases";

@Component({
  selector: "app-articles",
  templateUrl: "./article-list.component.html",
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private articleUseCases: ArticleUseCases) {}

  ngOnInit() {
    this.articleUseCases.readAll().subscribe((_) => (this.articles = _));
  }

  delete({ id }: Article) {
    this.articleUseCases.delete(id).subscribe(() => {
      this.articleUseCases.readAll().subscribe((_) => (this.articles = _));
    });
  }
}
