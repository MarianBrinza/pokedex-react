import './PokeCard.css';

const PokeCard = ({pokemon, handleCardClicked}) => {
  const {id, img, name} = pokemon;

  return (
    <div className="pokeCard" onClick={() => handleCardClicked(id)}>
      <h2>{`#${id.toString().padStart(3,'0')}`}</h2>
      <img src={img} alt={`pokemon ${name}`}/>
      <h2>{name}</h2>
    </div>
  );
}

export default PokeCard;
