import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  // eslint-disable-next-line no-unused-vars
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO: realizar petición http
    // Con fetch
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();
    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    // Con axios
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
