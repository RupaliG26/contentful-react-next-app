import API from '../';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRecipesService } from './';
import { IRecipe, RecipeAdapterPattern, Recipe } from '../../implementation/Recipe';

class RecipesService implements IRecipesService {
    getRecipesList() {
        return from(API.getEntries<IRecipe>({ content_type: 'recipe', select: 'sys.id,fields.title,fields.photo' }))
            .pipe(map(response => response.items.map(iRecipe => RecipeAdapterPattern.adapt(iRecipe))))
    }

    getRecipeDetails(recipeId: Recipe['id']) {
        return from(API.getEntry<IRecipe>(recipeId, { content_type: 'recipe', select: 'sys.id,fields' }))
            .pipe(map(response => RecipeAdapterPattern.adapt(response)));
    }
}

export default RecipesService;
