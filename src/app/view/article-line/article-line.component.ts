import { Component, Input, OnInit } from "@angular/core";
import { Article, toArticleId } from "../../core/article/domain/article.entity";
import { ActivatedRoute } from "@angular/router";
import { ArticleUseCases } from "../../core/article/domain/article.usecases";

@Component({
  selector: "app-article",
  templateUrl: "./article-line.component.html",
})
export class ArticleLineComponent implements OnInit {
  @Input()
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleUseCases: ArticleUseCases
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.articleUseCases
        .read(params["id"])
        .subscribe((_) => (this.article = _));
    });
  }
}
