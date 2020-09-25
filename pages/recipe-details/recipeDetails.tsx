import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const RecipeDetails = (props: any) => (
  <React.Fragment>
    {props.recipe && (
      <div className="recipe-details-section">
        <Link href={'/recipe-list'}>
          <a className="recipe-list-view back-btn">Back</a>
        </Link>
        {props.recipe.photo && <img src={props.recipe.photo.url} />}
        <h2>{props.recipe.title ? props.recipe.title : ""}</h2>
        <ReactMarkdown
          source={props.recipe.description ? props.recipe.description : ""}
          linkTarget='_blank' />
        {props.recipe.chef ? <p>Shared with you by: <span className="chef-name">{props.recipe.chef ? props.recipe.chef.name : undefined}</span></p> : ""}
        <ul>{(props.recipe.tags && props.recipe.tags.map((tag: any, index: number) => <li key={index} className="tag">{tag.name}</li>))}</ul>
      </div>
    )}
  </React.Fragment>
)


export default RecipeDetails;
