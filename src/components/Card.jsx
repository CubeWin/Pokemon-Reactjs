const Card = ({ character }) => {
	const { name, url } = character;
	return (
		<div>
			<h1>{name}</h1>
			<p>{url}</p>
		</div>
	);
};

export default Card;
