import { useContext, useEffect } from 'react';
import CharacterContext from '../../context/Character/CharacterContext';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import Card from '../Card';

const Character = () => {
  const characterContext = useContext(CharacterContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px 0px 250px 0px',
    threshold: 1.0,
  });

  const getPokes = async () => {
    characterContext.getCharacters();
  };

  useEffect(() => {
    console.log('Effect');
    getPokes();
  }, [isVisible]);

  return (
    <div className='col-span-1 lg:col-span-2 xl:col-span-3 pb-5'>
      {!isVisible ? console.log('No esta visto') : console.log('Esta visto')}
      <div className='flex flex-wrap justify-center'>
        {characterContext.characters.length > 0 &&
          characterContext.characters.map((pl, i) => {
            let ref = null;
            if (characterContext.characters.length - 1 === i) {
              console.log('Coincide');
              ref = containerRef;
            }
            return <Card key={pl.id} {...pl} ref={ref} />;
          })}
      </div>
    </div>
  );
};

export default Character;
