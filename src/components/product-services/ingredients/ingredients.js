import React from 'react'
import IngredientCacao from './cacao/cacao';
import Ingredient1906 from './i1906/i1906';
import IngredientDragees from './dragees/dragees';
import { Link } from 'react-router-dom';

const Ingredients = props => {
  const { product } = props;

  return (
    <div className="ingredients-component">
      {product.id === 'casaluker-origins' &&
        <Ingredient1906 data={product} />
      }
      {product.id === 'casaluker-cacao' &&
        <IngredientCacao data={product} />
      }
      {product.id === 'casaluker-maracas' &&
        <IngredientDragees data={product} />
      }
      <div className="btn-back-sticky">
        <Link to="/products-services/ingredients">BACK TO OUR PRODUCTS</Link>
      </div>
    </div>
  );
};


export default Ingredients;