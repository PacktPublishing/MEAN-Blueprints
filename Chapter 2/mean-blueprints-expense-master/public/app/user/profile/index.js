System.register(['./components/profile-edit.component', './components/profile-block.component', './components/block-entry.component', './profile.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (profile_edit_component_1_1) {
                exportStar_1(profile_edit_component_1_1);
            },
            function (profile_block_component_1_1) {
                exportStar_1(profile_block_component_1_1);
            },
            function (block_entry_component_1_1) {
                exportStar_1(block_entry_component_1_1);
            },
            function (profile_service_1_1) {
                exportStar_1(profile_service_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map