import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {Repo} from '../repo';
import {FindService} from '../finds/find.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers:[FindService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user:Users;
  repo:Repo;
  userRepo:any;
  username:string;

  constructor( private findService: FindService,private http:HttpClient) { }

  searchUser(){
    this.findService.updateSearch(this.username);
    console.log(this.username);
    this.findService.findUser(this.username);
    this.user = this.findService.user;
  }
  findUser(){
  this.user = this.findService.user;
   }
   findRepo(){
     this.repo = this.findService.repo;
   }

  ngOnInit() {
    this.findService.findRepo(this.username);
    this.repo = this.findService.repo;
    this.findService.findUser(this.username);
    this.user = this.findService.user;
  }


}
