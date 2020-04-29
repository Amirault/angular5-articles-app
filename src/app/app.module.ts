import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ArticleLineComponent} from './view/article-line/article-line.component';
import {ArticleListComponent} from './view/article-list/article-list.component';
import {ArticleUseCases} from './core/article/article.usecases';
import {ArticleCreationComponent} from './view/article-creation/article-creation.component';
import {MenuComponent} from './view/menu/menu.component';

const appRoutes: Routes = [
  { path: "create", component: ArticleCreationComponent },
  { path: "articles", component: ArticleListComponent },
  { path: "articles/:id", component: ArticleLineComponent },
  { path: "", component: ArticleListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleLineComponent,
    ArticleListComponent,
    ArticleCreationComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleUseCases],
  bootstrap: [AppComponent]
})
export class AppModule {}
