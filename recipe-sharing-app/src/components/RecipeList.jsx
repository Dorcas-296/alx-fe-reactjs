import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
   const recipes = useRecipeStore((state) => state.recipes || []); 

  if (!recipes.length) return <p>No recipes yet</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '15px'}}>
           <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
