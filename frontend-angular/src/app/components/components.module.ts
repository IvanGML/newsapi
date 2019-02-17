import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ArticleComponent } from './article/article.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ArticleComponent,
    SearchBarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ArticleComponent,
    SearchBarComponent,
    SpinnerComponent,
  ]
})
export class ComponentsModule { }
