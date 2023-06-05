import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const actionAddProductToCart = createAction('products/addProduct');
export const actionDeleteProductFromCart = createAction(
  'products/deleteProduct'
);
export const actionUpdateQuantity = createAction('products/updateProducts');
export const actionClearCart = createAction('products/clear');

const productsReducer = createReducer([], {
  [actionAddProductToCart]: (state, action) => {
    state.push(action.payload);
  },

  [actionDeleteProductFromCart]: (state, action) =>
    state.filter(product => product.id !== action.payload),

  [actionUpdateQuantity]: (state, action) => {
    const index = state.findIndex(item => item.id === action.payload.id);
    state[index].quantity = action.payload.quantity;
  },

  [actionClearCart]: (state, action) => [],
});

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
