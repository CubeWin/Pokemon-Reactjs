import { useState, useEffect } from 'react';
const Card = props => {
	console.log(props);
	const { name, url } = props.pokemon;
	const [character, setCharacter] = useState({});
	const [carga, setCarga] = useState(false);

	useEffect(() => {
		getPokemon();
	}, []);

	const getPokemon = async () => {
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error('No se retorno res.ook');
			const data = await res.json();
			console.log('Get pokemon Only', data.name);
			setCarga(true);
			setCharacter(data);
		} catch (err) {
			console.log(`error => ${err}`);
			return [{ error: err }];
		}
	};

	return (
		<div style={{ border: '1px solid #333', margin: '25px auto' }}>
			<h1>{name}</h1>
			<p>{url}</p>
			<img
				style={{ width: '150px', height: 'auto' }}
				src={carga ? character.sprites.other.dream_world.front_default : ''}
			/>
		</div>
	);
};
export default Card;
