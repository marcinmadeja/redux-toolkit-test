import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counter-slice';
import { apiSlice as dogsApiSlice } from "../features/dogs/dogs-api-slice";
import { apiSlice as pokemonApiSlice } from "../features/pokemons/pokemons-api-slice";

export const store = configureStore({
  // it will automatically use combine reducers
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware, pokemonApiSlice.middleware)
  }
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>