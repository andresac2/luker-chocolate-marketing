import React from 'react'
import IngredientCacao from './cacao/cacao';
import Ingredient1906 from './i1906/i1906';
import IngredientDragees from './dragees/dragees';

const Ingredients = props => {
  const { product } = props;

  return (
    <div >
      {product.id === 'arauca' &&
        <Ingredient1906 data={product} />
      }
      {product.id === 'cacao' &&
        <IngredientCacao data={product} />
      }
      {product.id === 'maracas' &&
        <IngredientDragees data={product} />
      }
    </div>
  );
};


export default Ingredients;