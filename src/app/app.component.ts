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
      console.log(res.items);
      this.repositories = res.items

    })
  }


}
