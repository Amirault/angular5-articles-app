import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./view/app/app.component";
import { ArticleLineComponent } from "./view/article-line/article-line.component";
import { ArticleListComponent } from "./view/article-list/article-list.component";
import { ArticleUseCases } from "./core/article/domain/article.usecases";
import { ArticleCreationComponent } from "./view/article-creation/article-creation.component";
import { MenuComponent } from "./view/menu/menu.component";
import { ArticleInMemorySource } from "./core/article/adapters/article-in-memory.source";
import { environment } from "../environments/environment";
import { ArticleRestSource } from "./core/article/adapters/article-rest.source";

const appRoutes: Routes = [
  { path: "create", component: ArticleCreationComponent },
  { path: "articles", component: ArticleListComponent },
  { path: "articles/:id", component: ArticleLineComponent },
  { path: "", component: ArticleListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleLineComponent,
    ArticleListComponent,
    ArticleCreationComponent,
    MenuComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, relativeLinkResolution: "legacy" } // <-- debugging purposes only
      // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: ArticleUseCases,
      useFactory: (httpClient: HttpClient) => {
        return new ArticleUseCases(
          environment.production
            ? new ArticleRestSource(
                httpClient,
                "https://my-json-server.typicode.com/amirault/angular5-articles-app"
              )
            : new ArticleInMemorySource()
        );
      },
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
