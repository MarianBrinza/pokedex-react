// import './pokeDetails/PokeDetails.css';
import {useEffect, useState} from "react";
import {colors, pokeDetails} from "../constants";
import {getPokemonDetails} from "../util";

const PokeDetails = ({selectedPokemonId}) => {

  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!selectedPokemonId) return;
    fetch(`${pokeDetails}${selectedPokemonId}`)
      .then(res => res.json())
      .then(data => {
        const pokemonDetails = getPokemonDetails(data);
        setDetails(pokemonDetails);
      })
  }, [selectedPokemonId]);

  if (!details) return null;
  const primaryType = colors[details.type[0]];

  return (
    <div className="pokeDetails">

      <div className="detailsContainer">
        <div className="detailsImgContainer">
          <img src={details.img} alt={`pokemon ${details.name}`}/>
        </div>


        <div className="statsContainer">
          <h2>{details.name}</h2>
          <hr className='separator' style={{borderColor: primaryType}}/>
          <h3>{details.id}</h3>
          <p>Type:
            {
              details.type.map(type => {
                const color = colors[type];
                return <span key={type} className='pokeType' style={{background: color}}>{type} </span>
              })
            }
          </p>

          {/*<p>Base experience: {details.baseExperience}</p>*/}
          <p>Weight: <span className='weight'>{details.weight} kg</span></p>
          <p>Height: <span className='height'>{details.height} m</span></p>

          <p>Skills:
            {
              details.abilities.map(ability => {
                return <span key={ability} className='ability'> 💥{ability}</span>
              })
            }
          </p>

          <div className="stats">
            <div className="hp">
              <h4>Hit Points <span className='emojy heart'>❤</span></h4>
              {details.stats.hp}/399
            </div>
            <div className="attack">
              <h4>Attack <span className='emojy sword'>⚔</span></h4>
              {details.stats.attack}/345
            </div>
            <div className="defense">
              <h4>Defense <span className='emojy shield'>🛡</span></h4>
              {details.stats.defense}/396
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PokeDetails;
