export class Company {
  _id: string;
  name: string;
  slug: string;
  owner: string;
  members: Array<string>;
  summary: string;
  country: string;
  address: string;
  createdAt: string;

  constructor(
    _id?: string,
    name?: string,
    slug?: string,
    owner?: string,
    members?: Array<string>,
    summary?: string,
    country?: string,
    address?: string,
    createdAt?: string
  ) {
    this._id = _id;
    this.name = name;
    this.slug = slug;
    this.owner = owner;
    this.members = members;
    this.summary = summary;
    this.country = country;
    this.address = address;
    this.createdAt = createdAt;
  }
}
