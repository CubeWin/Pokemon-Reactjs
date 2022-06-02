import { useReducer } from 'react';

import CharacterContext from './CharacterContext';
import CharacterReducer from './CharacterReducer';

import { GET_CHARACTERS, GET_PROFILE } from '../types';

const CharacterState = ({ children }) => {
  const initState = {
    characters: [],
    selectCharacter: null,
  };

  const [state, dispatch] = useReducer(CharacterReducer, initState);

  const getCharacters = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const { results } = await res.json();
      const data = results.map(async p => {
        const res = await fetch(p.url);
        const data = await res.json();
        const image = data.sprites.other.dream_world.front_default || null;
        return { image, ...data };
      });
      const myData = await Promise.all(data);
      console.log(myData);
      dispatch({ type: GET_CHARACTERS, payload: myData });
    } catch (err) {
      console.error(err);
    }
  };

  const getProfile = async id => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      const image = data.sprites.other.dream_world.front_default || null;
      dispatch({ type: GET_PROFILE, payload: { image, ...data } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        selectCharacter: state.selectCharacter,
        getCharacters,
        getProfile,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
