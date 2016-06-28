System.register(['angular2/core', '../category.service'], function(exports_1, context_1) {
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
    var core_1, category_service_1;
    var CategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            CategoryComponent = (function () {
                function CategoryComponent(categoryService) {
                    this._categoryService = categoryService;
                }
                CategoryComponent.prototype.onSubmit = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this._categoryService.update(this.category)
                        .subscribe(function (category) {
                        _this.category = category;
                    }, function (err) { return console.error(err); });
                };
                CategoryComponent = __decorate([
                    core_1.Component({
                        inputs: ['category'],
                        selector: 'category',
                        template: "\n    <div>\n      <form role=\"form\" (submit)=\"onSubmit($event)\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" [(ngModel)]=\"category.name\" class=\"form-control\" id=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Description</label>\n          <textarea class=\"form-control\" id=\"description\"\n            name=\"description\" [(ngModel)]=\"category.description\">\n          </textarea>\n        </div>\n        <button type=\"submit\" class=\"button\">save</button>\n      </form>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], CategoryComponent);
                return CategoryComponent;
            }());
            exports_1("CategoryComponent", CategoryComponent);
        }
    }
});
//# sourceMappingURL=category.component.js.map