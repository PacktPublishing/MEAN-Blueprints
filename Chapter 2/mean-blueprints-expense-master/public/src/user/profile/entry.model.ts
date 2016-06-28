export class Entry {
  title: string;
  subTitle: string;
  description: string;

  constructor(
    title?: string,
    subTitle?: string,
    description?: string
  ) {
    this.title = title || '';
    this.subTitle = subTitle || '';
    this.description = description || '';
  }
}
