import PokeCard from "../pokeCard/PokeCard";
import './PokeGrid.css';

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
