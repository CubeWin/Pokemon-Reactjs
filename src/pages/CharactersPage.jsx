import CharacterState from '../context/Character/CharacterState';
import Character from '../components/Pokemons/Character';
import Characters from '../components/Pokemons/Characters';

const CharacterPage = () => {
  return (
    <div className='max-h-screen h-screen'>
      <h1 className='uppercase font-bold text-center text-5xl my-5'>
        Pokemons
      </h1>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4'>
        <CharacterState>
          <Characters></Characters>
          <Character></Character>
        </CharacterState>
      </div>
    </div>
  );
};

export default CharacterPage;
