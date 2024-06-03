import { twMerge } from 'tailwind-merge';
import Label from './Label';

export default function Slider({ color, className, data, ...props }) {
	const { name, quantity, quantityMax, total, totalMax } = data;
	const percentage = ((quantity / quantityMax) * 100)
		.toFixed(2)
		.replace(/([^.])0+$/, '$1');
	return (
		<div
			{...props}
			className={twMerge(
				'h-full w-full flex flex-col items-center justify-between text-[20px] gap-y-2',
				className
			)}
			style={{ color: color }}
		>
			<div className="w-full flex flex-row justify-between flex-wrap">
				<Label className="max-w-[60%] h-fit text-white">{name}</Label>
				<span className={(total || totalMax) && 'text-white h-fit'}>
					{quantity}
					<MaxQuantity>/{quantityMax}</MaxQuantity>
				</span>
				{(total || totalMax) && (
					<span className="h-fit">
						${total}
						<MaxQuantity>/${totalMax}</MaxQuantity>
					</span>
				)}
			</div>
			<div className="h-[10px] w-full rounded-[20px] bg-white/20">
				<div
					className={`h-full rounded-[20px] animate-[fill_1000ms_ease-in-out]`}
					style={{ width: percentage + '%', backgroundColor: color }}
				/>
			</div>
		</div>
	);
}

function MaxQuantity({ children }) {
	return (
		<span className="h-fit text-center text-white/60 text-base font-normal">
			{children}
		</span>
	);
}
