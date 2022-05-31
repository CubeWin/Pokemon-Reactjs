import { useState, useEffect } from 'react';
import Card2 from './Card';

const App = () => {
	const [pokemons, setPokemons] = useState([]);
	// const [pokemon, setPokemon] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = async () => {
		setLoading(true);
		try {
			const res = await fetch('https://pokeapi.co/api/v2/pokemon');
			if (!res.ok) throw new Error('Error en la respuesta');
			const data = await res.json();
			const dataPokemons = data.results.map(async pok => {
				const res = await getPokemon(pok.url);
				const image = res.sprites.other.dream_world.front_default;
				const name = pok.name;
				return { name, image, ...res };
			});
			const result = await Promise.all(dataPokemons);
			console.log(result);

			setPokemons(result);
		} catch (err) {
			console.log(`=> error : ${err}`);
			return [{ error: err }];
		} finally {
			setLoading(false);
		}
	};

	const getPokemon = async url => {
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error('Error en la respuesta');
			const data = await res.json();
			return data;
		} catch (err) {
			console.log(`=> error : ${err}`);
			return [{ error: err }];
		}
	};

	if (loading) {
		return <h1>Tacargando perro....</h1>;
	}

	return (
		<div className='col-span-1 lg:col-span-2 xl:col-span-3 pb-5'>
			<div className='flex flex-wrap justify-center'>
				{pokemons.map((pke, i) => (
					<Card2
						key={i}
						name={pke.name}
						image={pke.image}
						height={pke.height}
						weight={pke.weight}
						types={pke.types}
						id={pke.id}
					/>
				))}
			</div>
		</div>
	);
};
export default App;
