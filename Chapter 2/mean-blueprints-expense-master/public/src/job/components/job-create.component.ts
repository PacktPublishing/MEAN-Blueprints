import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
    selector: 'job-create',
    directives: [
      RouterLink
    ],
    template: `
      <div class="jumbotron center-block">
        <h1>Post a new job</h1>
        <p>We are happy to see that you are growing.</p>
      </div>
      <div>
        <form role="form" (submit)="onSubmit($event)">
          <div class="form-group">
            <label for="title">Job title</label>
            <input type="text" [(ngModel)]="job.title" class="form-control" id="title">
          </div>
          <div class="form-group">
            <label for="industry">Industry</label>
            <input type="text" [(ngModel)]="job.industry" class="form-control" id="industry">
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input type="text" [(ngModel)]="job.country" class="form-control" id="country">
          </div>
          <div class="form-group">
            <label for="type">Job type</label>
            <input type="text" [(ngModel)]="job.type" class="form-control" id="type">
          </div>
          <div class="form-group">
            <label for="summary">Summary</label>
            <textarea [(ngModel)]="job.summary" class="form-control" id="summary"></textarea>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea [(ngModel)]="job.description" class="form-control" id="description"></textarea>
          </div>
          <button type="submit" class="button">Create a job</button>
        </form>
      </div>
    `
})
export class JobCreateComponent implements OnInit {
  public job: Job;
  private _router: Router;
  private _jobService: JobService;

  constructor(jobService: JobService, router: Router) {
    this._router = router;
    this._jobService = jobService;
  }

  ngOnInit() {
    this.job = new Job();
  }

  onSubmit(event) {
    event.preventDefault();

    this._jobService
    .create(this.job)
    .subscribe((job) => {
      if (job) {
        this.goToJob(job._id, job.slug);
      }
    });
  }

  goToJob(id, slug) {
    this._router.navigate(['JobDetail', { id: id, slug: slug}]);
  }
}
