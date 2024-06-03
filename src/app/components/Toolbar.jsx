import BackArrow from './BackArrow';
import Button from './Button';

export default function Toolbar() {
	return (
		<div className="h-[105px] w-screen sticky top-0 flex justify-center z-50">
			<div className="h-full w-full [@media(min-width:1473px)]:w-[1473px] flex flex-row space-x-5 items-center justify-between pl-[20px] pr-[15px] pt-[15px] pb-[15px] overflow-auto backdrop-blur-[75px]">
				<div className="h-[45px] flex flex-row items-center gap-x-[25px] font-medium">
					<Button className="flex items-center justify-center rounded-full h-10 w-10 p-0">
						<BackArrow />
					</Button>
					<span className="text-[25px] text-white text-nowrap">
						Portalys Event
					</span>
					<Button className="text-green border-green/40 pl-8 pr-8 rounded-[15px]">
						Live
					</Button>
				</div>
				<div className="h-[45px] flex flex-row items-center gap-x-4 font-bold">
					<Button className="text-red">Cancel Event</Button>
					<Button>Attendees</Button>
					<Button>Edit</Button>
					<Button className="text-black bg-white">View Event</Button>
				</div>
			</div>
		</div>
	);
}
