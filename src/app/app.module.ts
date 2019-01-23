import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import {FindService} from './finds/find.service';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GithubSearchComponent,
    RepoSearchComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
