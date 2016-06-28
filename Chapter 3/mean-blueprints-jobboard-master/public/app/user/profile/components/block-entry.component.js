System.register(['angular2/core', '../profile.service'], function(exports_1, context_1) {
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
    var core_1, profile_service_1;
    var BlockEntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            BlockEntryComponent = (function () {
                function BlockEntryComponent(profileService) {
                    this._profileService = profileService;
                }
                BlockEntryComponent.prototype.ngOnInit = function () {
                };
                BlockEntryComponent.prototype.onEnter = function (event) {
                    event.preventDefault();
                    this.saveEntry();
                };
                BlockEntryComponent.prototype.saveEntry = function () {
                    console.log('saving entry', this.entry, this.blockId);
                    // this._profileService.saveBlock(this.blockId);
                };
                BlockEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'block-entry',
                        directives: [],
                        inputs: ['entry', 'blockId'],
                        template: "\n      <form name=\"entryForm\">\n        <div class=\"form-group\">\n          <label>Title</label>\n          <input class=\"form-control\" type=\"text\"\n            (keydown.enter)=\"onEnter($event)\"\n            [(ngModel)]=\"entry.title\">\n        </div>\n        <div class=\"form-group\">\n          <label>Sub title</label>\n          <input class=\"form-control\" type=\"text\"\n            (keydown.enter)=\"onEnter($event)\"\n            [(ngModel)]=\"entry.subTitle\">\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <textarea class=\"form-control\"\n            (keydown.enter)=\"onEnter($event)\"\n            [(ngModel)]=\"entry.description\"></textarea>\n        </div>\n      </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], BlockEntryComponent);
                return BlockEntryComponent;
            }());
            exports_1("BlockEntryComponent", BlockEntryComponent);
        }
    }
});
//# sourceMappingURL=block-entry.component.js.map