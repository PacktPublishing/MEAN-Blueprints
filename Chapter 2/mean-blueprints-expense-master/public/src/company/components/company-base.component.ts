import { Component, OnInit } from 'angular2/core';
import { Router, RouterOutlet, RouteConfig } from 'angular2/router';
import { CompanyService } from '../company.service';
import { CompanyListComponent } from './company-list.component';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyCreateComponent } from './company-create.component';
import { Company } from '../company.model';

@RouteConfig([
  { path: '/', as: 'CompanyList', component: CompanyListComponent, useAsDefault: true },
  { path: '/:id/:slug', as: 'CompanyDetail', component: CompanyDetailComponent },
  { path: '/create', as: 'CompanyCreate', component: CompanyCreateComponent }
])
@Component({
    selector: 'company-base',
    directives: [
      RouterOutlet
    ],
    template: `
      <router-outlet></router-outlet>
    `
})
export class CompanyBaseComponent implements OnInit {
  public company: Company;
  private _router: Router;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, router: Router) {
    this._router = router;
    this._companyService = companyService;
  }

  ngOnInit() {
    // this._companyService
    // .getAll()
    // .subscribe((companies) => {
    //   this.companies = companies;
    // });
  }
}
