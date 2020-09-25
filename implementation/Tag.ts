import { Entry } from 'contentful';
import IAdapter from './adapter';

export interface ITag {
  name?: string;
}

export class Tag {
  id: Entry<ITag>['sys']['id'];
  name?: string;

  constructor(tag: Entry<ITag>) {
    this.id = tag.sys.id;
    this.name = tag.fields.name;
  }
}

class TagAdapter implements IAdapter<Tag> {
  adapt(item: Entry<ITag>): Tag {
    return new Tag(item);
  }
}

export const TagAdapterPattern: TagAdapter = new TagAdapter();
