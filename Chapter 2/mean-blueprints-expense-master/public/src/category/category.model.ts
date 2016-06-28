export class Category {
  _id: string;
  name: string;
  description: string;
  owner: string;
  collaborators: Array<any>;
  createdAt: Date;

  constructor(
    _id?: string,
    name?: string,
    description?: string,
    owner?: string,
    collaborators?: Array<any>,
    createdAt?: string
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.collaborators = collaborators;
    this.createdAt = new Date(createdAt);
  }
}
