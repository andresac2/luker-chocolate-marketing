import React from 'react'
import IngredientCacao from './cacao/cacao';
import Ingredient1906 from './origins/origins';
import IngredientDragees from './maracas/maracas';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

const Ingredients = props => {
  const { product, t } = props;

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
        <Link to="/products-services/ingredients">{t('buttons.back-to-products').toUpperCase()}</Link>
      </div>
    </div>
  );
};


export default withNamespaces()(Ingredients);