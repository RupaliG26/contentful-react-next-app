import { Entry, Asset } from 'contentful';

import IAdapter from './adapter';
import { IChef, ChefAdapterPattern, Chef } from './Chef';
import { ITag, TagAdapterPattern, Tag } from './Tag';
import { Photo, PhotoAdapterPattern } from './Photo';

export interface IRecipe {
  title?: string;
  photo?: Asset;
  description?: string;
  chef?: Entry<IChef>;
  tags?: Entry<ITag>[];
}

export class Recipe {
  id: Entry<IRecipe>['sys']['id'];
  title?: string;
  photo?: Photo;
  description?: string;
  chef?: Chef;
  tags?: Tag[];

  constructor(recipe: Entry<IRecipe>) {
    this.id = recipe.sys.id;
    this.title = recipe.fields.title;
    this.photo = recipe.fields.photo ? PhotoAdapterPattern.adapt(recipe.fields.photo) : recipe.fields.photo;
    this.description = recipe.fields.description;
    this.chef = recipe.fields.chef ? ChefAdapterPattern.adapt(recipe.fields.chef) : recipe.fields.chef;
    this.tags = recipe.fields.tags ? recipe.fields.tags.map(tag => TagAdapterPattern.adapt(tag)) : recipe.fields.tags;
  }
}

class RecipeAdapter implements IAdapter<Recipe> {
  adapt(item: Entry<IRecipe>): Recipe {
    return new Recipe(item);
  }
}

export const RecipeAdapterPattern: RecipeAdapter = new RecipeAdapter();
