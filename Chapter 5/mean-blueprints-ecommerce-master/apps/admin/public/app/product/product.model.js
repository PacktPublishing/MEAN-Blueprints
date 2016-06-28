System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(_id, sku, category, title, summary, description, images, price, details, active) {
                    this._id = _id;
                    this.sku = sku;
                    this.category = category;
                    this.title = title;
                    this.summary = summary;
                    this.description = description;
                    this.images = images;
                    this.price = price;
                    this.details = details;
                    this.active = active;
                }
                Product.prototype.controlMeta = function () {
                    var meta = {
                        _id: { type: 'hidden' },
                        sku: { label: 'SKU', required: true },
                        category: { label: 'Category' },
                        title: { label: 'Product title', required: true },
                        summary: { label: 'Summary', required: true },
                        description: { label: 'Product description' },
                        price: {}
                    };
                    Object.keys(this).forEach(function (key) {
                        // key: the name of the object key
                        // index: the ordinal position of the key within the object
                    });
                };
                Product.prototype.control = function (prop, opts) {
                    var base = {
                        type: opts.type || '',
                        controlType: opts.controlType || 'textbox',
                        label: opts.label || '',
                        required: !!opts.required,
                        value: this[prop],
                        key: prop || ''
                    };
                };
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.model.js.map