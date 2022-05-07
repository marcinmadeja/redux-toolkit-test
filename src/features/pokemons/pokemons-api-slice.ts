import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Pokemon {
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  }
}

export const apiSlice = createApi({
  reducerPath: 'apiPokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints(builder) {
    return {
      fetchPokemon: builder.query<Pokemon, number | string>({
        query(idOrName: number | string) {
          return `/pokemon/${idOrName}`
        }
      })
    }
  }
})

export const { useFetchPokemonQuery } = apiSlice;