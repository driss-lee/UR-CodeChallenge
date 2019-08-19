import { Component, OnInit } from '@angular/core'
import { Repository } from './repository'
import { RepoService } from './repo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repo-app'

  private repositories: Repository[] = []
  private page: number = 1
  isLoading: boolean = false

  constructor(private repoService: RepoService) {}

  ngOnInit() {
    this.getRepos()
  }

  getRepos() {
    if (this.isLoading) return
    this.repoService.get_repos(this.page).subscribe((res: any) => {
      this.repositories = res.items
      console.log(this.repositories)
      console.log(this.page)
    })
  }

  get_days_interval(createdAt: any): any {
    const createdDate = new Date(createdAt)
    const currentDate = new Date()
    let time_interval = currentDate.getTime() - createdDate.getTime()
    const days = Math.round(Math.abs(time_interval / (1000 * 60 * 60 * 24)))

    return days
  }

  onScroll() {
    if (this.page < 8) {
      console.log('Scrolled')
      this.page = this.page + 1
      this.getRepos()
    } else {
      this.isLoading = true
    }
  }

  onScrollUp() {
    if (this.page > 1) {
      console.log('scrolled up!!')

      this.page = this.page - 1
      this.getRepos()
    }
  }
}