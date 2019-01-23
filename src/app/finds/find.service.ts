import { Injectable } from '@angular/core';
import{Users} from '../users';
import{Repo} from '../repo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindService {
  user:Users;
  repo:Repo;
  newRepo:any[];
  newUsers:any[];
  private username:string;
  constructor(private http:HttpClient) {
    this.user = new Users ('','',0,0,'',0);
    this.repo = new Repo ('','',0);
    this.username = "Tuitoek"
  }
findUser(username){
    interface ApiResponse {
      avatar_url:string;
      name: string;
      bio: string;
      followers: number;
      following: number;
      public_repos:number;


    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/Tuitoek?access_token=d67a16a292d55ec18ec7c36b4956341eaeaba132").toPromise().then(response => {
        this.user.picture=response.avatar_url;
        this.user.name = response.name;
        this.user.bio = response.bio;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.repos = response.public_repos;

        resolve()

      }, error => {

        console.log("Error occured ");
        reject(error);
      }
      )
    })
    return promise;
  }

  findRepo(username){
    interface ApiResponse {
      name: string;
      description: string;
      star: number;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/user/repos?access_token=d67a16a292d55ec18ec7c36b4956341eaeaba132").toPromise().then(response => {
        this.repo.name = response.name;
        this.repo.description=  response.description;
        this.repo.star = response.star;

        resolve()

      }, error => {

        console.log("Error occured ");
        reject(error);
      }
      )
    })
    return promise;
  }
  updateSearch(userName:string){
    this.username = userName;
  }
  }
