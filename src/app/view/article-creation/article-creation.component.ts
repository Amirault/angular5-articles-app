import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleUseCases} from '../../core/article/article.usecases';

@Component({
  selector: "app-article-creation",
  templateUrl: "./article-creation.component.html"
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleUseCases
  ) {
    this.articleForm = this.fb.group({
      title: ["Fake Title", Validators.required],
      content: ["", Validators.required],
      authors: ["", Validators.required]
    });
  }

  ngOnInit() {}

  createArticle() {
    const formModel = this.articleForm.value;
    const rawArticle = {
      title: formModel.title,
      content: formModel.content,
      authors: formModel.authors
    };
    this.articleService.create(rawArticle).subscribe();
  }
}
