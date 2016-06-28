export class Job {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  type: string;
  company: string;
  industry: string;
  country: string;
  createdAt: string;

  constructor(
    _id?: string,
    title?: string,
    slug?: string,
    summary?: string,
    description?: string,
    type?: string,
    company?: string,
    industry?: string,
    country?: string,
    createdAt?: string
  ) {
    this._id = _id;
    this.title = title;
    this.slug = slug;
    this.summary = summary;
    this.description = description;
    this.type = type;
    this.company = company;
    this.industry = industry;
    this.country = country;
    this.createdAt = createdAt;
  }
}
