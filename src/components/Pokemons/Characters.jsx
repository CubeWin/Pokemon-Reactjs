import { useContext, useEffect } from 'react';
import CharacterContext from '../../context/Character/CharacterContext';
import Card from '../Card';

const Character = () => {
  const characterContext = useContext(CharacterContext);

  const getPokes = async () => {
    characterContext.getCharacters();
  };

  useEffect(() => {
    console.log('Effect');
    getPokes();
  }, []);

  return (
    <div className='col-span-1 lg:col-span-2 xl:col-span-3 pb-5'>
      <div className='flex flex-wrap justify-center'>
        {characterContext.characters.length > 0 &&
          characterContext.characters.map(pl => <Card key={pl.id} {...pl} />)}
      </div>
    </div>
  );
};

export default Character;
