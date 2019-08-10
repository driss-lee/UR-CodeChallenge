import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
  export class RepoService {

  baseUrl:string = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_repos(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }


}