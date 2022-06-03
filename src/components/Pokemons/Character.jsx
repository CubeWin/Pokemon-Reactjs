import { useContext, useEffect, useState } from 'react';
import CharacterContext from '../../context/Character/CharacterContext';

const Character = () => {
	const { getProfile, selectCharacter } = useContext(CharacterContext);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		getProfile(1);
	}, []);

	const handleToggle = () => {
		setIsActive(!isActive);
	};

	return (
		<div
			className={`w-full fixed lg:col-span-1 lg:static ${
				isActive ? '' : '-bottom-[85%]'
			}`}
			style={{ transition: 'all 0.5s ease-in-out' }}
		>
			<div className='absolute -top-5  w-full text-right'>
				<button
					onClick={handleToggle}
					className='bg-red-400 px-3 py-0 mr-8 rounded-t-full h-10 w-10 text-white text-center'
				>
					{isActive ? 'x' : '^'}
				</button>
			</div>
			<div
				className='rounded-3xl bg-gray-100 px-5 py-3 my-5 mx-3 sticky top-5 font-sans flex flex-col justify-between'
				style={{ height: 'calc( 100vh - 120px )' }}
			>
				{selectCharacter ? (
					<>
						<div className='w-full p-5 h-auto flex items-center justify-center'>
							<img
								className='max-w-[6rem] max-h-[6rem] md:max-w-[7rem] xl:max-w-[8rem] 2xl:max-w-[11rem] md:max-h-[7rem] xl:max-h-[8rem] 2xl:max-h-[11rem] h-auto'
								src={selectCharacter.image}
								alt='Pokemon'
							/>
						</div>
						<div className='text-center mb-3'>
							<small className='text-gray-400 font-bold'>
								N° {selectCharacter.id}
							</small>
							<h1 className='font-bold capitalize text-xl mb-3'>
								{selectCharacter.name}
							</h1>
							<div className='flex justify-center mb-3'>
								<div className='flex'>
									{selectCharacter.types.map((a, i) => (
										<div
											key={i}
											className='py-1 mx-1 rounded px-3 uppercase font-bold text-white bg-blue-400'
											style={{ lineHeight: '15px', fontSize: '16px' }}
										>
											{a.type.name}
										</div>
									))}
								</div>
							</div>
							<div className='flex justify-center mb-3'>
								<div className='mx-2'>
									<div className='text-gray-500 text-xs font-bold uppercase'>
										weight
									</div>
									<div className='font-bold font-mono'>
										{parseInt(selectCharacter.weight / 2.205)} kg
									</div>
								</div>
								<div className='mx-2'>
									<div className='text-gray-500 text-xs font-bold uppercase'>
										height
									</div>
									<div className='font-bold font-mono'>
										{selectCharacter.height / 10} m
									</div>
								</div>
							</div>
							<div className='flex flex-col'>
								<div className='mb-3 p-1 w-auto rounded-full bg-slate-200 uppercase font-bold text-slate-600 text-sm'>
									base exp {selectCharacter.base_experience}
								</div>
								<div className='flex justify-center items-center mb-3'>
									{selectCharacter.stats.map((s, i) => {
										return (
											<div
												key={i}
												className='mx-1 w-9 bg-gray-200 rounded-full h-16 dark:bg-gray-200 overflow-hidden shadow-inner shadow-slate-400'
											>
												<div
													className='rounded-full bg-blue-400 text-white text-xs w-9 h-9 flex justify-center items-center shadow-md shadow-slate-500 truncate cursor-help'
													title={s.stat.name}
												>
													{s.stat.name}
												</div>
												<div className='font-bold text-center font-mono'>
													{s.base_stat}
												</div>
											</div>
										);
									})}
								</div>
								<div className='uppercase'>
									<span className='text-xs font-bold mb-3'>abilities:</span>
									<div className='flex justify-center items-center mt-2'>
										{selectCharacter.abilities.map((a, i) => {
											return (
												<div
													className='py-1 px-2 bg-gray-200 mx-1 rounded-full text-xs text-blue-400'
													key={i}
												>
													{a.ability.name}
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<h1>Selecte</h1>
				)}
			</div>
		</div>
	);
};

export default Character;
