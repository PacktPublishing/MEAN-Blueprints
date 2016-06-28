import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
    selector: 'company-list',
    directives: [
      RouterLink
    ],
    template: `
      <div class="jumbotron center-block">
        <h2>Companies list</h2>
        <p class="lead">Here you can find all the registered companies.</p>
      </div>
      <div>
      <div *ngFor="#company of companies" class="col col-25">
        <img src="http://placehold.it/208x140?text=product+image&txtsize=18" />
        <h3>
          <a href="#"
            [routerLink]="['CompanyDetail', { id: company._id, slug: company.slug }]">
            {{ company.name }}
          </a>
          </h3>
      </div>
      </div>
    `
})
export class CompanyListComponent implements OnInit {
  public companies: Array<Company>;
  private _router: Router;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, router: Router) {
    this._router = router;
    this._companyService = companyService;
  }

  ngOnInit() {
    this._companyService
    .getAll()
    .subscribe((companies) => {
      this.companies = companies;
    });
  }
}
