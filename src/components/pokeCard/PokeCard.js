import './PokeCardStyles.css';

const PokeCard = ({pokemon}) => {
  const {id, img, name, type} = pokemon;

  return (
    <div className="pokeCard">
      <img src={img} alt={`pokemon ${name}`}/>
      <h2>{id}. {name}</h2>
      <p>Type: {type}</p>
    </div>
  );
}

export default PokeCard;
