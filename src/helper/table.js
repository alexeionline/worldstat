export default function(percents) {

	const SIDE = 5;
	const TOTAL = SIDE * SIDE;
	
	const value = percents / (100 / TOTAL);
	const full_count = Math.floor(value);
	const part_value = value - full_count;
	const empty_count = TOTAL - Math.ceil(value);

	return [
		...Array.from({length: full_count}, () => 1), 
		...Array.from({length: Math.ceil(part_value) }, () => part_value),
		...Array.from({length: empty_count}, () => 0)
	];
}