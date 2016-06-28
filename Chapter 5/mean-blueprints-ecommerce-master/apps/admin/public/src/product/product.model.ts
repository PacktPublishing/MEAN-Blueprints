export class Product {
  _id:            string;
  sku:            string;
  category:       string;
  title:          string;
  summary:        string;
  description:    string;
  images:         Array<any>;
  price:          any;
  details:        any;
  active:         boolean;

  constructor(
    _id?:            string,
    sku?:            string,
    category?:       string,
    title?:          string,
    summary?:        string,
    description?:    string,
    images?:         Array<any>,
    price?:          any,
    details?:        any,
    active?:         boolean
  ) {
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

  controlMeta() {
    const meta = {
      _id: { type: 'hidden' },
      sku: { label: 'SKU', required: true },
      category: { label: 'Category'},
      title: { label: 'Product title', required: true },
      summary: { label: 'Summary', required: true },
      description: { label: 'Product description' },
      price: {}
    };

    Object.keys(this).forEach(function(key) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
    });
  }

  private control(prop, opts) {
    const base = {
      type: opts.type || '',
      controlType: opts.controlType || 'textbox',
      label: opts.label || '',
      required: !!opts.required,
      value: this[prop],
      key: prop || ''
    }
  }
}
