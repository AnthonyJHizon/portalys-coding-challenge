import { twMerge } from 'tailwind-merge';

export default function Button({ className, children, ...props }) {
	return (
		<button
			{...props}
			className={twMerge(
				'h-full w-fit text-base text-white text-center text-nowrap border rounded-[50px] border-white/20 bg-black pl-[25px] pr-[25px]',
				className
			)}
		>
			{children}
		</button>
	);
}
