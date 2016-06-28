System.register(['angular2/core', 'angular2/router', '../company.service', './company-list.component', './company-detail.component', './company-create.component'], function(exports_1, context_1) {
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
    var core_1, router_1, company_service_1, company_list_component_1, company_detail_component_1, company_create_component_1;
    var CompanyBaseComponent;
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
            function (company_list_component_1_1) {
                company_list_component_1 = company_list_component_1_1;
            },
            function (company_detail_component_1_1) {
                company_detail_component_1 = company_detail_component_1_1;
            },
            function (company_create_component_1_1) {
                company_create_component_1 = company_create_component_1_1;
            }],
        execute: function() {
            CompanyBaseComponent = (function () {
                function CompanyBaseComponent(companyService, router) {
                    this._router = router;
                    this._companyService = companyService;
                }
                CompanyBaseComponent.prototype.ngOnInit = function () {
                    // this._companyService
                    // .getAll()
                    // .subscribe((companies) => {
                    //   this.companies = companies;
                    // });
                };
                CompanyBaseComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', as: 'CompanyList', component: company_list_component_1.CompanyListComponent, useAsDefault: true },
                        { path: '/:id/:slug', as: 'CompanyDetail', component: company_detail_component_1.CompanyDetailComponent },
                        { path: '/create', as: 'CompanyCreate', component: company_create_component_1.CompanyCreateComponent }
                    ]),
                    core_1.Component({
                        selector: 'company-base',
                        directives: [
                            router_1.RouterOutlet
                        ],
                        template: "\n      <router-outlet></router-outlet>\n    "
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router])
                ], CompanyBaseComponent);
                return CompanyBaseComponent;
            }());
            exports_1("CompanyBaseComponent", CompanyBaseComponent);
        }
    }
});
//# sourceMappingURL=company-base.component.js.map