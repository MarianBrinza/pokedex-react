import PokeCard from "../pokeCard/PokeCard";
import './PokeGridStyles.css';

const PokeGrid = ({pokemons}) => {

  return (
    <div className="pokeGrid">
      <ul>
        {
          pokemons.map(pokemon => (
            <li key={pokemon.id}>
              <PokeCard pokemon={pokemon}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default PokeGrid;
