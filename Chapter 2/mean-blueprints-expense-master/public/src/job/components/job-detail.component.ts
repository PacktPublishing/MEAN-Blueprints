import { Component, OnInit } from 'angular2/core';
import { RouteParams, RouterLink } from 'angular2/router';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
    selector: 'job-detail',
    directives: [
      RouterLink
    ],
    template: `
      <div class="job-header">
        <div class="col content">
          <p>Added on: {{ job.createdAt }}</p>
          <h2>{{ job.name }}</h2>
          <div class="job-description">
            <h4>Description</h4>
            <div>{{ job.description }}</div>
          </div>
        </div>
        <div class="sidebar">
          <h4>Country</h4>
          <p>{{ job.country }}</p>
          <h4>Industry</h4>
          <p>{{ job.industry }}</p>
          <h4>Job type</h4>
          <p>{{ job.type }}</p>
        </div>
      </div>
    `
})
export class JobDetailComponent implements OnInit {
  public job: Job;
  private _routeParams: RouteParams;
  private _jobService: JobService;

  constructor(jobService: JobService, routerParams: RouteParams) {
    this._routeParams = routerParams;
    this._jobService = jobService;
  }

  ngOnInit() {
    const id: string = this._routeParams.get('id');
    this.job = new Job();
    this._jobService
    .findById(id)
    .subscribe((job) => {
      this.job = job;
    });
  }
}
