import { Observable } from 'rxjs';
import RecipesService from './recipe.service';
import { Recipe } from '../../implementation/Recipe';

export interface IRecipesService {
  getRecipesList: () => Observable<Recipe[]>;
  getRecipeDetails: (recipeId: Recipe['id']) => Observable<Recipe>;
}
const IRecipeService: IRecipesService = new RecipesService();

export default IRecipeService;
