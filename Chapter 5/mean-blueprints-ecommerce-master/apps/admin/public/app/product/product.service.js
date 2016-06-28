System.register(['angular2/core', 'rxjs/Observable', '../auth/index', '../common/index'], function(exports_1, context_1) {
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
    var core_1, Observable_1, index_1, index_2;
    var ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            ProductService = (function () {
                function ProductService(authHttp) {
                    var _this = this;
                    this._authHttp = authHttp;
                    this.products = new Observable_1.Observable(function (observer) { return _this._productsObservers = observer; }).share();
                    this._dataStore = { products: [] };
                }
                ProductService.prototype.getAll = function () {
                    var _this = this;
                    this._authHttp
                        .get('/api/products', { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (products) {
                        _this._dataStore.products = products;
                        _this._productsObservers.next(_this._dataStore.products);
                    }, function (err) { return console.error(err); });
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [index_1.AuthHttp])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map