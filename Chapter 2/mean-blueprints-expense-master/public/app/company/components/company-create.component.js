System.register(['angular2/core', 'angular2/router', '../company.service', '../company.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, company_service_1, company_model_1;
    var CompanyCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (company_model_1_1) {
                company_model_1 = company_model_1_1;
            }],
        execute: function() {
            CompanyCreateComponent = (function () {
                function CompanyCreateComponent(companyService, router) {
                    this._router = router;
                    this._companyService = companyService;
                }
                CompanyCreateComponent.prototype.ngOnInit = function () {
                    this.company = new company_model_1.Company();
                };
                CompanyCreateComponent.prototype.onSubmit = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._companyService
                        .create(this.company)
                        .subscribe(function (company) {
                        if (company) {
                            _this.goToCompany(company._id, company.slug);
                        }
                    }, function (err) { return console.error(err); });
                };
                CompanyCreateComponent.prototype.goToCompany = function (id, slug) {
                    this._router.navigate(['CompanyDetail', { id: id, slug: slug }]);
                };
                CompanyCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'company-create',
                        directives: [
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"login jumbotron center-block\">\n        <h1>Register</h1>\n      </div>\n      <div>\n        <form role=\"form\" (submit)=\"onSubmit($event)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Company name</label>\n            <input type=\"text\" [(ngModel)]=\"company.name\" class=\"form-control\" id=\"name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Country</label>\n            <input type=\"text\" [(ngModel)]=\"company.country\" class=\"form-control\" id=\"country\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Address</label>\n            <input type=\"text\" [(ngModel)]=\"company.address\" class=\"form-control\" id=\"address\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Summary</label>\n            <textarea [(ngModel)]=\"company.summary\" class=\"form-control\" id=\"summary\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button\">Submit</button>\n        </form>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router])
                ], CompanyCreateComponent);
                return CompanyCreateComponent;
            }());
            exports_1("CompanyCreateComponent", CompanyCreateComponent);
        }
    }
});
//# sourceMappingURL=company-create.component.js.map