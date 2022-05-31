import App from '../components/App';

const Pokemon = () => {
	return (
		<div className='max-h-screen h-screen'>
			<h1 className='uppercase font-bold text-center text-5xl my-5'>
				Pokemons
			</h1>
			<div className='grid lg:grid-cols-3 xl:grid-cols-4'>
				<App />
				<div className='bg-green-300 col-span-1'>
					<div
						className='rounded-3xl bg-gray-100 px-5 py-3 my-5 mx-3 sticky top-5'
						style={{ height: 'calc( 100vh - 120px )' }}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Pokemon;
