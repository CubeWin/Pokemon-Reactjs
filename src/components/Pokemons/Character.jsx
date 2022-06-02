import { useContext, useId } from 'react';
import CharacterContext from '../../context/Character/CharacterContext';

const Character = () => {
  const { selectCharacter } = useContext(CharacterContext);

  return (
    <div className='col-span-1'>
      <div
        className='rounded-3xl bg-gray-100 px-5 py-3 my-5 mx-3 sticky top-5'
        style={{ height: 'calc( 100vh - 120px )' }}
      >
        {selectCharacter ? (
          <>
            <div className='w-full p-5 h-auto flex items-center justify-center'>
              <img
                className='w-44 h-auto'
                src={selectCharacter.image}
                alt='Pokemon'
              />
            </div>
            <div className='text-center'>
              <small className='text-gray-400 font-bold'>
                N° {selectCharacter.id}
              </small>
              <h1 className='font-bold capitalize'>{selectCharacter.name}</h1>
              <div className='flex justify-center mb-1'>
                <div className='flex mx-2'>
                  <div
                    className='py-1 rounded px-3 uppercase font-bold text-white bg-blue-400'
                    style={{ lineHeight: '15px', fontSize: '16px' }}
                  >
                    {selectCharacter.types.map(a => a.type.name)}
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <div className='mx-2'>
                  <div
                    className='small'
                    style={{ lineHeight: '15px', fontSize: '16px' }}
                  >
                    Peso
                  </div>
                  <div className='font-bold'>
                    {parseInt(selectCharacter.weight / 2.205)} kg
                  </div>
                </div>
                <div className='mx-2'>
                  <div
                    className='small'
                    style={{
                      lineHeight: '15px',
                      fontSize: '16px',
                      color: '#002244',
                    }}
                  >
                    Tamaño
                  </div>
                  <div className='font-bold'>
                    {selectCharacter.height / 10} m
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <span>exp base:{selectCharacter.base_experience}</span>
                {selectCharacter.stats.map(s => {
                  return (
                    <div key={useId}>
                      {s.base_stat} || {s.stat.name}
                    </div>
                  );
                })}
                <span>
                  abilities:{' '}
                  {selectCharacter.abilities.map(a => {
                    return <div key={useId}>{a.ability.name}</div>;
                  })}
                </span>
              </div>
            </div>
          </>
        ) : (
          <h1>Selecte</h1>
        )}
      </div>
    </div>
  );
};

export default Character;
