import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
    selector: 'jobs',
    inputs: ['company'],
    directives: [RouterLink],
    template: `
      <div *ngFor="#job of jobs" class="col">
        <h3>
          <a href="#"
            [routerLink]="['/Jobs', 'JobDetail', { id: job._id, slug: job.slug }]">
            {{ job.title }}
          </a>
        </h3>
        <p>
          <a href="#"
            [routerLink]="['/Companies', 'CompanyDetail', { id: job.company._id, slug: job.company.slug }]">
            {{ job.company.name }}
          </a>
          <span>·</span>
          <span>{{ job.industry }}</span>
          <span>·</span>
          <span>{{ job.type }}</span>
          <span>·</span>
          <span>{{ job.createdAt }}</span>
        </p>
        <p>{{ job.summary }}</p>
      </div>
    `
})
export class JobsComponent implements OnInit {
  public company: any;
  public jobs: Array<Job>;
  private _jobsService: JobService;
  private _router: Router;

  constructor(jobsService: JobService, router: Router) {
    this._router = router;
    this._jobsService = jobsService;
  }

  ngOnInit() {
    let query: any = {};

    if (this.company) {
      query.company = this.company;
    }

    this._jobsService
    .getAll(query)
    .subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
