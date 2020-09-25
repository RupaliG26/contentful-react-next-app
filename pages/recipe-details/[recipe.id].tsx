import React, { useState, useEffect } from 'react';
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RecipeDetails from './recipeDetails';
import { Recipe } from '../../implementation/Recipe';
import RecipesService from '../../api/recipes';

const RecipeDetailsPage: NextPage = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const router = useRouter()
  useEffect(() => {
    const getRecipeSubscription = RecipesService.getRecipeDetails(router.asPath.split("/")[2]).subscribe(recipe => setRecipe(recipe));

    return () => getRecipeSubscription.unsubscribe();
  }, [router.asPath.split("/")[2]]);

  return (
    <Layout title="Home | Recipes Details Page">
      <RecipeDetails
        recipe={recipe}
      />

    </Layout>
  );
}

export default RecipeDetailsPage
