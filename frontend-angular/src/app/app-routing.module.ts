import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from "./pages/news-list/news-list.component";
import { SingleArticleComponent } from "./pages/single-article/single-article.component";
import { FormComponent } from "./pages/form/form.component";

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: SingleArticleComponent },
  { path: 'news/:id/edit', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
