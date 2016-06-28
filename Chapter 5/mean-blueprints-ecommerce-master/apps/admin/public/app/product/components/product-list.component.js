System.register(['angular2/core', '../product.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, product_service_1, router_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(productService) {
                    this.products = [];
                    this._productService = productService;
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.products.subscribe(function (products) {
                        _this.products = products;
                    });
                    this._productService.getAll();
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        directives: [router_1.RouterLink],
                        template: "\n      <div class=\"product-list row\">\n        <h2 class=\"col\">Products list</h2>\n        <div *ngIf=\"products.length === 0\" class=\"empty-product-list col\">\n          <h3>Add your first product to you catalog</h3>\n        </div>\n        <div class=\"col col-25\">\n          <a href=\"#\" [routerLink]=\"['ProductCreate']\" class=\"add-product-sign\">+</a>\n        </div>\n        <div *ngFor=\"#product of products\" class=\"col col-25\">\n          <img src=\"http://placehold.it/208x140?text=product+image&txtsize=18\" />\n          <h3>\n            <a href=\"#\"\n              [routerLink]=\"['ProductEdit', { sku: product.sku }]\">\n              {{ product.title }}\n            </a>\n            </h3>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map