System.register(['angular2/core', 'angular2/router', '../company.service'], function(exports_1, context_1) {
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
    var core_1, router_1, company_service_1;
    var CompanyListComponent;
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
            }],
        execute: function() {
            CompanyListComponent = (function () {
                function CompanyListComponent(companyService, router) {
                    this._router = router;
                    this._companyService = companyService;
                }
                CompanyListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._companyService
                        .getAll()
                        .subscribe(function (companies) {
                        _this.companies = companies;
                    });
                };
                CompanyListComponent = __decorate([
                    core_1.Component({
                        selector: 'company-list',
                        directives: [
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"jumbotron center-block\">\n        <h2>Companies list</h2>\n        <p class=\"lead\">Here you can find all the registered companies.</p>\n      </div>\n      <div>\n      <div *ngFor=\"#company of companies\" class=\"col col-25\">\n        <img src=\"http://placehold.it/208x140?text=product+image&txtsize=18\" />\n        <h3>\n          <a href=\"#\"\n            [routerLink]=\"['CompanyDetail', { id: company._id, slug: company.slug }]\">\n            {{ company.name }}\n          </a>\n          </h3>\n      </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router])
                ], CompanyListComponent);
                return CompanyListComponent;
            }());
            exports_1("CompanyListComponent", CompanyListComponent);
        }
    }
});
//# sourceMappingURL=company-list.component.js.map