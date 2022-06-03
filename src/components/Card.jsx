import { useContext } from 'react';
import CharacterContext from '../context/Character/CharacterContext';
import './card.css';
const Card = ({ name, image, height, weight, types = [], id }) => {
	const { getProfile } = useContext(CharacterContext);
	return (
		<>
			<a
				onClick={() => getProfile(id)}
				className='w-72 relative rounded-3xl bg-gray-100 px-5 py-3 my-5 mx-3 flex flex-col justify-between text-center cursor-pointer hover:shadow-md hover:shadow-blue-300 transition-shadow'
			>
				<div className='w-full h-auto flex items-center justify-center mb-3'>
					<img className='pokeCard-image' src={image} alt='Pokemon' />
				</div>
				<div>
					<small className='text-gray-400 font-bold'>N° {id}</small>
					<h1 className='font-bold capitalize mb-3'>{name}</h1>
					<div className='flex justify-center mb-3'>
						{types.map((a, i) => (
							<div
								key={i}
								className='py-1 mx-1 rounded px-3 uppercase font-bold text-white bg-blue-400'
								style={{ lineHeight: '15px', fontSize: '16px' }}
							>
								{a.type.name}
							</div>
						))}
					</div>
					<div className='flex justify-center'>
						<div className='mx-2'>
							<div className='text-xs uppercase text-slate-800'>Weight</div>
							<div className='font-bold'>{parseInt(weight / 2.205)} kg</div>
						</div>
						<div className='mx-2'>
							<div className='text-xs uppercase text-slate-800'>Height</div>
							<div className='font-bold'>{height / 10} m</div>
						</div>
					</div>
				</div>
			</a>
		</>
	);
};

export default Card;
