import {nrOfPokemons, pokeApi, spritesUrl} from "./constants";

export const fetchPokemons = async () => {
  console.log('a')
  const promises = [];

  for (let i = 1; i < nrOfPokemons + 1; i++) {
    promises.push(fetch(`${pokeApi}/${i}`).then(res => res.json()));
  }

  const results = await Promise.all(promises);
  let pokemons = results.map(pokemon => ({
    name: pokemon.name,
    id: pokemon.id,
    img: pokemon.sprites.front_default,
    type: pokemon.types.map(t => t.type.name).join(', ')
  }));

  console.log(pokemons)
  return pokemons;
}

export const getPokemonsInfo = (data) => {
  const poke = data.map(pokemon => ({
    name: pokemon.name,
    id: pokemon.id,
    img: pokemon.sprites.front_default,
    type: pokemon.types.map(t => t.type.name).join(', ')
  }));
  return poke;
}

export const getPokemonsInfo2 = (data) => {
  const poke = data.map((pokemon, index) => ({
    name: pokemon.name,
    id: index +1,
    img: `${spritesUrl}${index+1}.png`
  }));
  return poke;
}