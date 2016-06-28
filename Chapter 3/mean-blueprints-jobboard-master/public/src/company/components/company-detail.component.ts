import { Component, OnInit } from 'angular2/core';
import { RouteParams, RouterLink } from 'angular2/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { JobsComponent } from '../../job/index';

@Component({
    selector: 'company-detail',
    directives: [
      JobsComponent,
      RouterLink
    ],
    template: `
      <div class="company-header">
        <h2>{{ company.name }}</h2>
        <p>
          <span>{{ company.country }}</span>
          <span>·</span>
          <span>{{ company.address }}</span>
        </p>
      </div>
      <div class="company-description">
        <h4>Description</h4>
      </div>
      <div class="company-job-list">
        <jobs [company]=company._id></jobs>
      </div>
    `
})
export class CompanyDetailComponent implements OnInit {
  public company: Company;
  private _routeParams: RouteParams;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, routerParams: RouteParams) {
    this._routeParams = routerParams;
    this._companyService = companyService;
  }

  ngOnInit() {
    const id: string = this._routeParams.get('id');
    this.company = new Company();
    this._companyService
    .findById(id)
    .subscribe((company) => {
      this.company = company;
    });
  }
}
