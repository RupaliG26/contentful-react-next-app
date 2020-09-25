import { Entry } from 'contentful';
import IAdapter from './adapter';

export interface IChef {
  name?: string;
}

export class Chef {
  id: Entry<IChef>['sys']['id'];
  name?: string;

  constructor(chef: Entry<IChef>) {
    this.id = chef.sys.id;
    this.name = chef.fields.name;
  }
}

class ChefAdapter implements IAdapter<Chef> {
  adapt(item: Entry<IChef>): Chef {
    return new Chef(item);
  }
}

export const ChefAdapterPattern: ChefAdapter = new ChefAdapter();
