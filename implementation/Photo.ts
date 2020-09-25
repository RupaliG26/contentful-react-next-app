import { Asset } from 'contentful';
import IAdapter from './adapter';

export interface IPhoto extends Asset {
}

export class Photo {
  id: Asset['sys']['id'];
  url: Asset['fields']['file']['url'];

  constructor(photo: IPhoto) {
    this.id = photo.sys.id;
    this.url = photo.fields.file.url;
  }
}

class PhotoAdapter implements IAdapter<Photo> {
  adapt(item: IPhoto): Photo {
    return new Photo(item);
  }
}

export const PhotoAdapterPattern: PhotoAdapter = new PhotoAdapter();
