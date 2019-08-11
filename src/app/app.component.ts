import { Component, OnInit } from '@angular/core';
import { Repository } from './repository';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repo-app';

  private repositories : Repository [] =[];

  constructor (private repoService : RepoService ){

  }

  ngOnInit(){
    this.repoService.get_repos().subscribe((res : any )=> {
      this.repositories = res.items

    })
  }

  get_days_interval(createdAt : any) : any {

    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    let time_interval = currentDate.getTime() - createdDate.getTime();
    const days = Math.round(Math.abs(time_interval/(1000*60*60*24)));

    return days;
  }


}
