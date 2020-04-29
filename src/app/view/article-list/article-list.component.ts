import { Component, OnInit } from "@angular/core";
import { Article } from "../../core/article/article.entity";
import { ArticleUseCases } from "../../core/article/article.usecases";

@Component({
  selector: "app-articles",
  templateUrl: "./article-list.component.html",
})
export class ArticleListComponent implements OnInit {
  articles: Article[];

  constructor(private articleService: ArticleUseCases) {}

  ngOnInit() {
    this.articleService
      .readAll()
      .subscribe((articles) => (this.articles = articles));
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this.articleService
        .readAll()
        .subscribe((articles) => (this.articles = articles));
    });
  }
}
