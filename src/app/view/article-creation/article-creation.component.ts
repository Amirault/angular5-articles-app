import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ArticleUseCases } from "../../core/article/domain/article.usecases";

@Component({
  selector: "app-article-creation",
  templateUrl: "./article-creation.component.html",
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleUseCases: ArticleUseCases
  ) {
    this.articleForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      authors: ["", Validators.required],
    });
  }

  ngOnInit() {}

  createArticle() {
    const formModel = this.articleForm.value;
    const rawArticle = {
      title: formModel.title,
      content: formModel.content,
      authors: formModel.authors,
    };
    this.articleUseCases.create(rawArticle).subscribe();
  }
}
