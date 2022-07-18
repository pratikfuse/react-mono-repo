import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  reducers,
);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      immutableCheck: true, // makes sure store is not mutated directly
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // ignore serializable check for redux-persist
      },
    });
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
