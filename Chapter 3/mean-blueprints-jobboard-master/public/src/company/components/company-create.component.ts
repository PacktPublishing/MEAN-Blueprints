import { Component, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
    selector: 'company-create',
    directives: [
      RouterLink
    ],
    template: `
      <div class="login jumbotron center-block">
        <h1>Register</h1>
      </div>
      <div>
        <form role="form" (submit)="onSubmit($event)">
          <div class="form-group">
            <label for="name">Company name</label>
            <input type="text" [(ngModel)]="company.name" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="email">Country</label>
            <input type="text" [(ngModel)]="company.country" class="form-control" id="country">
          </div>
          <div class="form-group">
            <label for="email">Address</label>
            <input type="text" [(ngModel)]="company.address" class="form-control" id="address">
          </div>
          <div class="form-group">
            <label for="password">Summary</label>
            <textarea [(ngModel)]="company.summary" class="form-control" id="summary"></textarea>
          </div>
          <button type="submit" class="button">Submit</button>
        </form>
      </div>
    `
})
export class CompanyCreateComponent implements OnInit {
  public company: Company;
  private _router: Router;
  private _companyService: CompanyService;

  constructor(companyService: CompanyService, router: Router) {
    this._router = router;
    this._companyService = companyService;
  }

  ngOnInit() {
    this.company = new Company();
  }

  onSubmit(event) {
    event.preventDefault();

    this._companyService
    .create(this.company)
    .subscribe((company) => {
      if (company) {
        this.goToCompany(company._id, company.slug);
      }
    }, err => console.error(err));
  }

  goToCompany(id, slug) {
    this._router.navigate(['CompanyDetail', { id: id, slug: slug}]);
  }
}
