import { useEffect, useState } from 'react';
import mcDuck from '../../data/mc-duck.json';
import cfk from '../../data/cfk.json';
import minodosPizza from '../../data/minodos-pizza.json';
import bta from '../../data/bta.json';
import shenro from '../../data/shenro.json';
import { ProductCard } from './ProductCard/ProductCard';
import { List, ProductsBox } from './ProductsList.styled';

export function ProductsList({ shop }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    switch (shop) {
      case 'mc-duck':
        setProducts(mcDuck);
        break;
      case 'cfk':
        setProducts(cfk);
        break;
      case 'minodos-pizza':
        setProducts(minodosPizza);
        break;
      case 'bta':
        setProducts(bta);
        break;
      case 'shenro':
        setProducts(shenro);
        break;
      default:
        setProducts([]);
    }
  }, [shop]);

  return (
    <ProductsBox>
      <List>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
    </ProductsBox>
  );
}
