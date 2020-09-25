import React from 'react';
import Link from 'next/link';

const RecipeList = (props: any) => (
  <React.Fragment>
    <ul className='recipe-list'>
      {props.recipes && props.recipes.map((recipe: any) => (
        <li key={recipe.id} className='recipe-card'>
          <Link href={'/recipe-details/' + recipe.id}>
            <a className="recipe-list-view">
              <div>
                <img src={recipe.photo ? recipe.photo.url : ""} />
                <div>{recipe.title || ''}</div>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment >
)

export default RecipeList;
