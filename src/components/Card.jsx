import { useState, useEffect } from 'react';
const Card = props => {
	console.log(props);
	const { name, url } = props.character;
	const [character, setCharacter] = useState({});

	useEffect(() => {
		getCharacter();
	}, []);

	const getCharacter = async () => {
		try {
			const res = await fetch(url);
			if (!res.ok) {
				throw new Error('No se retorno res.ook');
			}
			const data = await res.json();
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
				src={character.sprites.other.dream_world.front_default}
			/>
		</div>
	);
};
export default Card;
