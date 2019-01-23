import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubSearchComponent} from './github-search/github-search.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RepoSearchComponent} from './repo-search/repo-search.component'

const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path: 'users',component:GithubSearchComponent},
  {path:'repo',component:RepoSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
