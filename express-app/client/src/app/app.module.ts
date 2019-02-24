import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { NewsListComponent } from './pages/news-list/news-list.component';
import { FormComponent } from './pages/form/form.component';
import { SingleArticleComponent } from './pages/single-article/single-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    FormComponent,
    SingleArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
