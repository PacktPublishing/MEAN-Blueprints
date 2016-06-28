import { Component } from 'angular2/core';
import { JobService } from '../job.service';
import { Job } from '../job.model';
import { JobsComponent } from './jobs.component';

@Component({
    selector: 'job-list',
    directives: [JobsComponent],
    template: `
      <div class="login jumbotron center-block">
        <h2>Job openings</h2>
        <p class="lead">Take a look, maybe you will find something for you.</p>
      </div>
      <div>
        <jobs></jobs>
      </div>
    `
})
export class JobListComponent {
  public jobs: Array<Job>;
  private _jobsService: JobService;

  constructor(jobsService: JobService) {
    this._jobsService = jobsService;
  }
}
