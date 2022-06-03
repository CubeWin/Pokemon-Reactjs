import { useContext, useEffect, useState } from 'react';
import CharacterContext from '../../context/Character/CharacterContext';
import Card from '../Card';

const Character = () => {
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);
	const characterContext = useContext(CharacterContext);

	const getPokes = async () => {
		characterContext.getCharacters(page);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		console.log('Effect');
		getPokes();
	}, [page, loading]);

	const nextPage = () => {
		const a = page + 10;
		setPage(a);
	};

	const prevPage = () => {
		const a = page - 10;
		setPage(a);
	};

	return (
		<div className='col-span-1 lg:col-span-2 xl:col-span-3 pb-5'>
			<div className='bg-gray-100 rounded-2xl my-5 mx-2 text-right'>
				<button
					className='hover:shadow-md transition-shadow duration-300 ease-in-out font-bold font-mono rounded-lg p-2 m-2 bg-blue-400 mx-3 text-white'
					onClick={prevPage}
				>
					{`< prev`}
				</button>
				<button
					className='hover:shadow-md transition-shadow duration-300 ease-in-out font-bold font-mono rounded-lg p-2 m-2 bg-blue-400 mx-3 text-white'
					onClick={nextPage}
				>
					{`next >`}
				</button>
			</div>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<div className='flex flex-wrap justify-center lg:justify-between'>
					{characterContext.characters.length > 0 &&
						characterContext.characters.map(pl => <Card key={pl.id} {...pl} />)}
				</div>
			)}
		</div>
	);
};

export default Character;
