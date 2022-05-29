import { useState, useEffect } from 'react';
import Card2 from './Card2';

const App = () => {
	const [pokemons, setPokemons] = useState([]);
	// const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = async () => {
		try {
			const res = await fetch('https://pokeapi.co/api/v2/pokemon');
			if (!res.ok) throw new Error('Error en la respuesta');
			const data = await res.json();
			const dataPokemons = data.results.map(async pok => {
				const image = await getPokemon(pok.url);
				const name = pok.name;
				return { name, image };
			});
			const result = await Promise.all(dataPokemons);
			console.log(result);

			setPokemons(result);
		} catch (err) {
			console.log(`=> error : ${err}`);
			return [{ error: err }];
		}
	};

	const getPokemon = async url => {
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error('Error en la respuesta');
			const data = await res.json();
			return data.sprites.other.dream_world.front_default;
		} catch (err) {
			console.log(`=> error : ${err}`);
			return [{ error: err }];
		}
	};

	return (
		<>
			<h1>Collection</h1>
			<p>Listar pokemons</p>
			{pokemons.map((pke, i) => (
				<Card2 key={i} name={pke.name} image={pke.image} />
			))}
		</>
	);
};
export default App;
