import './App.css';
import {getPokemonsInfo2} from "./util";
import {useEffect, useState} from "react";
import {pokeApi3} from "./constants";
import PokeGrid from "./components/pokeGrid/PokeGrid";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // if (pokemons.length === 0) {
    //   const promises = [];
    //   for (let i = 1; i < nrOfPokemons + 1; i++) {
    //     promises.push(fetch(`${pokeApi}/${i}`).then(res => res.json()));
    //   }
    //
    //   Promise.all(promises).then(results => {
    //     setPokemons(getPokemonsInfo(results));
    //   });
    // }
    if (pokemons.length === 0) {
      fetch(pokeApi3)
        .then(res => res.json())
        .then(data => {
          const p = getPokemonsInfo2(data.results);
          setPokemons(p);
        })
    }
  });

  return (
    <div className="App">
      <h1>pokedex</h1>

      {
        pokemons.length > 0 ? <PokeGrid pokemons={pokemons}/> : <></>
      }


    </div>
  );
}

export default App;
