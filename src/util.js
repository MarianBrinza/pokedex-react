export const fetchPokemonsInfo = (data) => {
  const pokemons = data.map((pokemon, index) => ({
    name: pokemon.name,
    url: pokemon.url,
    id: index + 1,
    // img: `${spritesUrl}${index + 1}.png`
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));
  return pokemons;
}

export const setCssClasses = () => {
  const pokeGrid = document.querySelector('.pokeGrid')
  const ul = document.querySelector('.pokeGrid ul');
  pokeGrid.classList.add('mr-150');
  if (ul.classList.contains('center')) {
    ul.classList.remove('center');
    ul.classList.add('spaceBetween');
  }
}


export const getHeight = (pokemonHeight) => {
  let height;
  if (pokemonHeight < 10) {
    height = `0.${pokemonHeight}`
  } else {
    height = Number(pokemonHeight) / 10;
  }
  return height;
};


export const getPokemonDetails = (data) => {
  const stats = {};
  data.stats.forEach((s) => stats[s.stat.name] = s.base_stat);

  let abilities = [];
  data.abilities.forEach((a) => abilities.push(a.ability.name));

  let height = getHeight(data.height);
  const pokemonDetails = {
    name: data.name,
    id: `#${data.id.toString().padStart(3, '0')}`,
    type: data.types.map(t => t.type.name),
    img2: data.sprites.front_default,
    img: data.sprites.other.dream_world.front_default,
    weight: Number(data.weight) / 10,
    height: height,
    baseExperience: data.base_experience,
    stats,
    abilities
  }
  return pokemonDetails;
};