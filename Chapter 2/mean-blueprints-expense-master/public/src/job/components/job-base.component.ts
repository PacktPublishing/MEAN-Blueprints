import { Component } from 'angular2/core';
import { RouterOutlet, RouteConfig } from 'angular2/router';
import { JobService } from '../job.service';
import { JobListComponent } from './job-list.component';
import { JobDetailComponent } from './job-detail.component';
import { JobCreateComponent } from './job-create.component';

@RouteConfig([
  { path: '/', as: 'JobList', component: JobListComponent, useAsDefault: true },
  { path: '/:id/:slug', as: 'JobDetail', component: JobDetailComponent },
  { path: '/create', as: 'JobCreate', component: JobCreateComponent }
])
@Component({
    selector: 'job-base',
    directives: [
      RouterOutlet
    ],
    template: `
      <router-outlet></router-outlet>
    `
})
export class JobBaseComponent {
  constructor() {}
}
