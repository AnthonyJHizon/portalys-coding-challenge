export default function charPercentage(numerator, denominator) {
	return `${((numerator / denominator) * 100).toFixed(1).replace(/\.0$/, '')}%`;
}
