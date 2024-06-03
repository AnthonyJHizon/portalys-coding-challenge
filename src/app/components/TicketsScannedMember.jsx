import Container from './Container';

export default function TicketsScannedMember({ data }) {
	const { image, name, numTicketsScanned } = data;
	return (
		<Container className="w-[300px] h-[70px] flex-row rounded-[15px] pl-[10px] pt-[10px] pr-[15px] pb-[10px] items-center">
			<img
				className="h-[50px] w-[50px] border rounded-[5px] border-white/60"
				src={image}
				alt=""
			/>
			<div className="w-full flex flex-row justify-between">
				<span className="text-white text-base">{name}</span>
				<span className="text-yellow text-lg">{numTicketsScanned} </span>
			</div>
		</Container>
	);
}
