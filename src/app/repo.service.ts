import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
  export class RepoService {

  baseUrl:string = `https://api.github.com/search/repositories?q=created:>${this.get_date_before_30_days()}&sort=stars&order=desc&page=`;
  
  constructor(private httpClient : HttpClient) { 
 
  }
  
  // Fetch data from github API.
  get_repos(page : number): Observable<any>{
    return this.httpClient.get(this.baseUrl+page);
  }

  // Get the date before 30 day from now.
  get_date_before_30_days() {

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 30);
    let beforeThirtyDay = currentDate.toJSON(currentDate).split("T")[0];
    return beforeThirtyDay;

  }


}