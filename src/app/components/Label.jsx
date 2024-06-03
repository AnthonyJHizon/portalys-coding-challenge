import { twMerge } from 'tailwind-merge';

export default function Label({ className, children, ...props }) {
	return (
		<label
			{...props}
			className={twMerge(
				'h-full w-fit align-center text-[20px] font-medium text-white/60 truncate hover:text-wrap hover:overflow-visible',
				className
			)}
		>
			{children}
		</label>
	);
}
