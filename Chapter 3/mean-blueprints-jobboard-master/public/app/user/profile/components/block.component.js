System.register(['angular2/core', './block-entry.component'], function(exports_1, context_1) {
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
    var core_1, block_entry_component_1;
    var BlockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (block_entry_component_1_1) {
                block_entry_component_1 = block_entry_component_1_1;
            }],
        execute: function() {
            BlockComponent = (function () {
                function BlockComponent() {
                }
                BlockComponent.prototype.ngOnInit = function () {
                    this.block = {};
                };
                BlockComponent = __decorate([
                    core_1.Component({
                        selector: 'profile-block',
                        directives: [block_entry_component_1.BlockEntryComponent],
                        template: "\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{block.title}}</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"profile-block-entries\">\n            <div *ngFor=\"#entry of block.data\">\n              <block-entry [entry]=\"entry\" [blockId]=\"block._id\"></block-entry>\n              <hr>\n            </div>\n          </div>\n          <button class=\"btn btn-default btn-xs btn-block\" ng-click=\"vm.addEntry()\">\n            <i class=\"glyphicon glyphicon-plus\"></i> Add new entry\n          </button>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BlockComponent);
                return BlockComponent;
            }());
            exports_1("BlockComponent", BlockComponent);
        }
    }
});
//# sourceMappingURL=block.component.js.map