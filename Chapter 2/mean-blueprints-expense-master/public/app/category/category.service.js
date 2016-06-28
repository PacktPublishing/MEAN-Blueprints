System.register(['angular2/core', 'rxjs/Observable', 'rxjs/Subject/BehaviorSubject', '../auth/index', '../common/index', './category.model'], function(exports_1, context_1) {
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
    var core_1, Observable_1, BehaviorSubject_1, index_1, index_2, category_model_1;
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (category_model_1_1) {
                category_model_1 = category_model_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService(authHttp) {
                    var _this = this;
                    this._authHttp = authHttp;
                    this.categories = new Observable_1.Observable(function (observer) {
                        _this._categoriesObserver = observer;
                    }).share();
                    this.category = new BehaviorSubject_1.BehaviorSubject(null);
                }
                CategoryService.prototype.getAll = function () {
                    var _this = this;
                    return this._authHttp
                        .get('/api/categories', { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .map(function (data) {
                        var categories = data.map(function (category) {
                            return new category_model_1.Category(category._id, category.name, category.description, category.owner, category.collaborators);
                        });
                        _this._categoriesObserver.next(categories);
                        return categories;
                    });
                };
                CategoryService.prototype.findById = function (id) {
                    return this._authHttp
                        .get("/api/categories/" + id, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CategoryService.prototype.create = function (category) {
                    var body = JSON.stringify(category);
                    return this._authHttp
                        .post('/api/categories', body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CategoryService.prototype.update = function (category) {
                    var body = JSON.stringify(category);
                    return this._authHttp
                        .put("/api/categories/" + category._id, body, { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CategoryService.prototype.delete = function (category) {
                    return this._authHttp
                        .put("/api/categories/" + category._id, '', { headers: index_2.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [index_1.AuthHttp])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=category.service.js.map