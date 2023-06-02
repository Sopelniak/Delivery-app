import { useEffect, useState } from 'react';
import mcDuck from '../../data/mc-duck.json';
import cfk from '../../data/cfk.json';
import minodosPizza from '../../data/minodos-pizza.json';
import bta from '../../data/bta.json';
import shenro from '../../data/shenro.json';
import { ProductCard } from './ProductCard/ProductCard';

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
        console.log('wrong path');
        setProducts([]);
    }
  }, [shop]);

  return (
    <div>
      <h2>{shop}</h2>
      <ul>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
