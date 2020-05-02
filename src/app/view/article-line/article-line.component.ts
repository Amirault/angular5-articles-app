import { Component, Input, OnInit } from "@angular/core";
import { Article } from "../../core/article/domain/article.entity";
import { ActivatedRoute, Params } from "@angular/router";
import { ArticleUseCases } from "../../core/article/domain/article.usecases";

@Component({
  selector: "app-article",
  templateUrl: "./article-line.component.html",
})
export class ArticleLineComponent implements OnInit {
  @Input()
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleUseCases: ArticleUseCases
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (isArticleId(params)) {
        this.articleUseCases
          .read(Number(params.id))
          .subscribe((_) => (this.article = _));
      }
    });
  }
}

function isArticleId(params: Params): params is { id: string } {
  return params && "id" in params && typeof params["id"] === "string";
}
