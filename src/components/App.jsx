import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ShopPage } from 'pages/ShopPage/ShopPage';
import { ShoppingCartPage } from 'pages/ShoppingCartPage/ShoppingCartPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <>
      <div>ggg</div>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
