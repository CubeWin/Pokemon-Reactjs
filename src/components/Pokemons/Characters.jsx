import { useContext, useEffect, useState } from 'react';
import CharacterContext from '../../context/Character/CharacterContext';
import Card from '../Card';

const Character = () => {
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const characterContext = useContext(CharacterContext);

	const getPokes = async () => {
		await characterContext.getCharacters(page);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		console.log('Effect');
		getPokes();
	}, [page]);

	const nextPage = () => {
		setLoading(true);
		const a = page + 20;
		setPage(a);
	};

	const prevPage = () => {
		setLoading(true);
		const a = page - 20;
		setPage(a);
	};

	return (
		<div className='col-span-1 lg:col-span-2 xl:col-span-3 pb-5'>
			<div className='bg-gray-100 rounded-2xl my-5 mx-2 text-right'>
				<button
					className={` ease-in-out font-bold font-mono rounded-lg p-2 m-2 ${
						loading
							? 'bg-blue-200'
							: 'bg-blue-400 hover:shadow-md transition-shadow duration-300'
					} mx-3 text-white`}
					onClick={prevPage}
					disabled={loading}
				>
					{`< prev`}
				</button>
				<button
					className={` ease-in-out font-bold font-mono rounded-lg p-2 m-2 ${
						loading
							? 'bg-blue-200'
							: 'bg-blue-400 hover:shadow-md transition-shadow duration-300'
					} mx-3 text-white`}
					onClick={nextPage}
					disabled={loading}
				>
					{`next >`}
				</button>
			</div>
			{console.log(loading, 'Render HTML')}
			{loading ? (
				<div className='w-full h-full flex justify-center'>
					<h1 className='text-2xl mt-5'>...Loading</h1>
				</div>
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
