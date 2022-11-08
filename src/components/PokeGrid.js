import PokeCard from "./PokeCard";

const PokeGrid = ({pokemons, handleCardClicked}) => {

  return (
    <div className="pokeGrid">
      <ul className='center'>
        {
          pokemons.map(pokemon => (
            <li key={pokemon.id}>
              <PokeCard
                pokemon={pokemon}
                handleCardClicked={handleCardClicked}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default PokeGrid;
