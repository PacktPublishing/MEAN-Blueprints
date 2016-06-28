System.register(['angular2/core', '../category.service', './category.component'], function(exports_1, context_1) {
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
    var core_1, category_service_1, category_component_1;
    var CategoryListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (category_component_1_1) {
                category_component_1 = category_component_1_1;
            }],
        execute: function() {
            CategoryListComponent = (function () {
                function CategoryListComponent(categoryService) {
                    this._categoryService = categoryService;
                }
                CategoryListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._categorySubscription = this._categoryService.category
                        .subscribe(function (category) {
                        if (category) {
                            _this.categories.push(category);
                        }
                    });
                    this._categoryService
                        .getAll()
                        .subscribe(function (categories) {
                        _this.categories = categories;
                    });
                };
                CategoryListComponent.prototype.ngOnDestroy = function () {
                    this._categorySubscription.unsubscribe();
                };
                CategoryListComponent = __decorate([
                    core_1.Component({
                        selector: 'category-list',
                        directives: [category_component_1.CategoryComponent],
                        template: "\n      <div class=\"jumbotron center-block\">\n        <h2>List of all your categories</h2>\n      </div>\n      <div>\n        <category *ngFor=\"#category of categories\" [category]=\"category\"></category>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], CategoryListComponent);
                return CategoryListComponent;
            }());
            exports_1("CategoryListComponent", CategoryListComponent);
        }
    }
});
//# sourceMappingURL=category-list.component.js.map