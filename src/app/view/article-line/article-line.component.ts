import { Component, Input, OnInit } from "@angular/core";
import { Article } from "../../core/article/article.entity";
import { ActivatedRoute } from "@angular/router";
import { ArticleUseCases } from "../../core/article/article.usecases";

@Component({
  selector: "app-article",
  templateUrl: "./article-line.component.html",
})
export class ArticleLineComponent implements OnInit {
  @Input()
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleUseCases
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params && params["id"]) {
        this.articleService
          .read(params["id"])
          .subscribe((article) => (this.article = article));
      }
    });
  }
}
