const Card2 = ({ name, image }) => {
	return (
		<div style={{ border: '1px solid #333', margin: '25px auto' }}>
			<h1>{name}</h1>
			<img style={{ width: '150px', height: 'auto' }} src={image} />
		</div>
	);
};

export default Card2;
