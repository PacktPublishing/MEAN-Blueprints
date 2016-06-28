System.register(['angular2/core', 'angular2/router', './product-list.component', './product-edit.component', './product-create.component'], function(exports_1, context_1) {
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
    var core_1, router_1, product_list_component_1, product_edit_component_1, product_create_component_1;
    var ProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_edit_component_1_1) {
                product_edit_component_1 = product_edit_component_1_1;
            },
            function (product_create_component_1_1) {
                product_create_component_1 = product_create_component_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent() {
                }
                ProductComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', as: 'ProductList', component: product_list_component_1.ProductListComponent, useAsDefault: true },
                        { path: '/:sku', as: 'ProductEdit', component: product_edit_component_1.ProductEditComponent },
                        { path: '/create', as: 'ProductCreate', component: product_create_component_1.ProductCreateComponent }
                    ]),
                    core_1.Component({
                        selector: 'product-component',
                        directives: [
                            product_list_component_1.ProductListComponent,
                            router_1.RouterOutlet
                        ],
                        template: "\n      <div class=\"col\">\n        <router-outlet></router-outlet>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductComponent);
                return ProductComponent;
            }());
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map