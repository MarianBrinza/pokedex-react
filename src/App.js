import './App.css';
import {fetchPokemonsInfo, setCssClasses} from "./util";
import {useEffect, useState} from "react";
import {pokeApi} from "./constants";
import PokeGrid from "./components/pokeGrid/PokeGrid";
import PokeDetails from "./components/pokeDetails/PokeDetails";
import Layout from "./components/layout/Layout";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  useEffect(() => {
    if (pokemons.length === 0) {
      fetch(pokeApi)
        .then(res => res.json())
        .then(data => {
          const p = fetchPokemonsInfo(data.results);
          setPokemons(p);
        })
    }
  }, [pokemons]);

  const handleCardClicked = (id) => {
    if (selectedPokemonId === id) return;
    setSelectedPokemonId(id);

    setCssClasses();
  }

  return (
    <div className="App">

      <Layout>
        {
          pokemons.length > 0 ? <PokeGrid pokemons={pokemons} handleCardClicked={handleCardClicked}/> : <></>
        }
        {
          selectedPokemonId !== null ? <PokeDetails selectedPokemonId={selectedPokemonId}/> : <></>
        }
      </Layout>


    </div>
  );
}

export default App;
