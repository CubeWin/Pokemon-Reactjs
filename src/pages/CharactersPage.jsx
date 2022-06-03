import CharacterState from '../context/Character/CharacterState';
import Character from '../components/Pokemons/Character';
import Characters from '../components/Pokemons/Characters';

const CharacterPage = () => {
	return (
		<div className='max-h-screen h-screen'>
			<h1 className='font-serif font-extrabold text-center text-6xl my-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-400'>
				Pokémon
			</h1>
			<div className='grid lg:grid-cols-3 xl:grid-cols-4 relative'>
				<CharacterState>
					<Characters></Characters>
					<Character></Character>
				</CharacterState>
			</div>
		</div>
	);
};

export default CharacterPage;
