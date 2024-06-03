import { twMerge } from 'tailwind-merge';

export default function Container({ className, children, ...props }) {
	return (
		<div
			{...props}
			className={twMerge(
				'h-full w-fit max-w-[95vw] flex flex-col gap-x-[15px] font-medium border rounded-[25px] border-white/20 bg-black pl-[10px] pr-[10px] pt-[20px] pb-[10px]',
				className
			)}
		>
			{children}
		</div>
	);
}
