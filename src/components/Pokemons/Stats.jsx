const Stats = ({ stats }) => {
	const {
		base_stat: baseStat,
		stat: { name },
	} = stats;

	let reg = '';
	let short = '';
	switch (name) {
		case 'hp':
			reg = 'bg-red-400';
			short = 'HP';
			break;
		case 'attack':
			reg = 'bg-orange-400';
			short = 'ATK';
			break;
		case 'defense':
			reg = 'bg-blue-400';
			short = 'DEF';
			break;
		case 'special-attack':
			reg = 'bg-yellow-400';
			short = 'SpA';
			break;
		case 'special-defense':
			reg = 'bg-teal-400';
			short = 'SpD';
			break;
		case 'speed':
			reg = 'bg-green-400';
			short = 'SPD';
			break;

		default:
			reg = 'bg-blue-400';
			short = 'NN';
			break;
	}
	return (
		<>
			<div
				className={`mx-1 w-9 bg-gray-200 rounded-full h-16 overflow-hidden shadow-inner shadow-slate-400 flex flex-col items-center`}
			>
				<div
					className={`rounded-full ${reg} text-slate-800 text-xs w-8 h-8 flex justify-center items-center shadow-md shadow-slate-500 font-bold cursor-help`}
					title={name}
					style={{ marginTop: '2px' }}
				>
					{short}
				</div>
				<div className='font-bold text-center font-mono'>{baseStat}</div>
			</div>
		</>
	);
};

export default Stats;
