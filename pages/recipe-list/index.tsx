import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Recipe } from '../../implementation/Recipe';
import RecipesService from '../../api/recipes';
import RecipeList from './recipeList';

const IndexPage: NextPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    const getRecipesSubscription = RecipesService.getRecipesList().subscribe((recipes: React.SetStateAction<Recipe[]>) => setRecipes(recipes));
    return () => getRecipesSubscription.unsubscribe();
  }, []);


  return (
    <Layout title="Home | Recipes List Page">
      <header>
        <h1>
          Recipes List
          </h1>
      </header>
      <RecipeList
        recipes={recipes}
      />
    </Layout>
  );
};

export default IndexPage;
