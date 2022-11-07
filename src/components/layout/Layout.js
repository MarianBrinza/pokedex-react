import './Layout.css';
import pokedex from '../../assets/pokedex.png';

const Layout = ({children}) => {

  return (
    <div className="layout">

      <div className="imgContainer">
        <img src={pokedex} alt='pokedex logo'/>
      </div>

      <div className="childrenWrapper">
        {
          children
        }
      </div>
    </div>
  );
}

export default Layout;
