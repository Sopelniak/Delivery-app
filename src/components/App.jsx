import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ShopPage } from 'pages/ShopPage/ShopPage';
import { ShoppingCartPage } from 'pages/ShoppingCartPage/ShoppingCartPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProductsList } from './ProductsList/ProductsList';
import { Notice } from './Notice/Notice';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="shop" element={<ShopPage />}>
            <Route index element={<Notice message="Please select a shop!" />} />
            <Route path="mc-duck" element={<ProductsList shop="mc-duck" />} />
            <Route path="cfk" element={<ProductsList shop="cfk" />} />
            <Route
              path="minodos-pizza"
              element={<ProductsList shop="minodos-pizza" />}
            />
            <Route path="bta" element={<ProductsList shop="bta" />} />
            <Route path="shenro" element={<ProductsList shop="shenro" />} />
          </Route>

          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
