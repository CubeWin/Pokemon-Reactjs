import { useEffect, useState } from 'react';

import Card from './Card';

const App = () => {
	const [personajes, setPersonajes] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getCharacter();
	}, []);

	const getCharacter = async () => {
		setLoading(true);
		try {
			const res = await fetch('https://pokeapi.co/api/v2/pokemon');
			if (!res.ok) {
				throw new Error('La respuesta no tenia ok');
			}
			const data = await res.json();
			console.log([...data.results]);
			setPersonajes([...data.results]);
		} catch (err) {
			console.log(`error => ${err}`);
			return [{ error: err }];
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <span>...Loading</span>;
	}

	return (
		<>
			<h1>Hola mundo</h1> <p>Desde ReactJS</p>
			{personajes.map((p,i) => (
				<Card key={i} character={p} />
			))}
		</>
	);
};

export default App;
