System.register(['angular2/core', 'angular2/router', '../company.service', '../company.model', '../../job/index'], function(exports_1, context_1) {
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
    var core_1, router_1, company_service_1, company_model_1, index_1;
    var CompanyDetailComponent;
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
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            CompanyDetailComponent = (function () {
                function CompanyDetailComponent(companyService, routerParams) {
                    this._routeParams = routerParams;
                    this._companyService = companyService;
                }
                CompanyDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.company = new company_model_1.Company();
                    this._companyService
                        .findById(id)
                        .subscribe(function (company) {
                        _this.company = company;
                    });
                };
                CompanyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'company-detail',
                        directives: [
                            index_1.JobsComponent,
                            router_1.RouterLink
                        ],
                        template: "\n      <div class=\"company-header\">\n        <h2>{{ company.name }}</h2>\n        <p>\n          <span>{{ company.country }}</span>\n          <span>\u00B7</span>\n          <span>{{ company.address }}</span>\n        </p>\n      </div>\n      <div class=\"company-description\">\n        <h4>Description</h4>\n      </div>\n      <div class=\"company-job-list\">\n        <jobs [company]=company._id></jobs>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.RouteParams])
                ], CompanyDetailComponent);
                return CompanyDetailComponent;
            }());
            exports_1("CompanyDetailComponent", CompanyDetailComponent);
        }
    }
});
//# sourceMappingURL=company-detail.component.js.map