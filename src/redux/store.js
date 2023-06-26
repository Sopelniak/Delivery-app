import {
  combineReducers,
  configureStore,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// ACTIONS
export const actionAddProductToCart = createAction('products/addProduct');
export const actionDeleteProductFromCart = createAction(
  'products/deleteProduct'
);
export const actionUpdateQuantity = createAction('products/updateProducts');
export const actionClearCart = createAction('products/clear');

// REDUCER
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

const rootReducer = combineReducers({
  products: productsReducer,
});

// PERSIST
const productsPersistConfig = {
  key: 'products',
  storage,
};

const productsPersistedReducer = persistReducer(
  productsPersistConfig,
  rootReducer
);

// STORE
export const store = configureStore({
  reducer: productsPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
