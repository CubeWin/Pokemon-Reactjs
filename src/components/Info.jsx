import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Info = () => {
	const { data } = useContext(DataContext);

	if (!data[0]) {
		return <h1>Cargando...</h1>;
	}

	const { name, image, height, weight, types = [], id } = data[0];

	return (
		<div className='bg-green-300 col-span-1'>
			<div
				className='rounded-3xl bg-gray-100 px-5 py-3 my-5 mx-3 sticky top-5'
				style={{ height: 'calc( 100vh - 120px )' }}
			>
				<div className='w-full h-auto flex items-center justify-center'>
					<img className='pokeCard-image' src={image} alt='Pokemon' />
				</div>
				<div>
					<small className='text-gray-400 font-bold'>N° {id}</small>
					<h1 className='font-bold'>{name}</h1>
					<div className='flex justify-center mb-1'>
						<div className='flex mx-2'>
							<div
								className='py-1 rounded px-3 uppercase font-bold text-white bg-blue-400'
								style={{ lineHeight: '15px', fontSize: '16px' }}
							>
								{types.map(a => a.type.name)}
							</div>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='mx-2'>
							<div
								className='small'
								style={{ lineHeight: '15px', fontSize: '16px' }}
							>
								Peso
							</div>
							<div className='font-bold'>{parseInt(weight / 2.205)} kg</div>
						</div>
						<div className='mx-2'>
							<div
								className='small'
								style={{
									lineHeight: '15px',
									fontSize: '16px',
									color: '#002244',
								}}
							>
								Tamaño
							</div>
							<div className='font-bold'>{height / 10} m</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
