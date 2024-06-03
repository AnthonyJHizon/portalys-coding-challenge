import charPercentage from '../utils/format/chartPercentage';
import Button from './Button';
import Container from './Container';
import DoughnutChart from './DoughnutChart';
import Label from './Label';
import Slider from './Slider';

// Chart data for guest list scanned
const GuestListData = {
	max: 100,
	mainText: charPercentage(65, 100),
	subText: '65/100',
	data: [
		{
			value: 42, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display. *Find Fix if going to use value*
			name: 'Vip List',
			itemStyle: {
				color: 'rgba(255, 84, 146, 1)',
			},
		},
		{
			value: 42 + 23 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display. *Find Fix if going to use value*
			name: 'Guest List',
			itemStyle: {
				color: 'rgba(72, 233, 255, 1)',
			},
		},
	],
};

// List Data for guest list scanned
const GuestLists = [
	{
		id: '1',
		name: 'VIP List',
		quantity: 42,
		quantityMax: 70,
		added: 12,
		color: 'rgba(255, 84, 146, 1)',
	},
	{
		id: '2',
		name: 'Guest List',
		quantity: 23,
		quantityMax: 30,
		added: 5,
		color: 'rgba(72, 233, 255, 1)',
	},
];

export default function GuestList() {
	return (
		<Container
			id="Guest-List"
			className="gap-y-[15px] min-h-[260px] w-[577px] p-0 pt-5"
		>
			<div className="flex flex-row justify-between h-10 text-center pl-[10px] lg:pl-[20px] pr-[10px]">
				<Label className="max-w-[50%]">Guest list scanned</Label>
				<Button>Add Guest</Button>
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-y-[20px] h-fit lg:h-[160px]">
				<DoughnutChart
					data={GuestListData}
					style={{ height: '200px', width: '200px' }}
				/>
				<div className="max-w-[90vw] w-[350px] min-h-[160px] flex flex-row gap-x-[15px] p-4">
					<div className="h-full w-[275px] flex flex-col justify-between gap-y-[15px]">
						{GuestLists.map((list) => {
							return (
								<Slider
									key={list.id}
									data={list}
									color={list.color}
									className="justify-normal gap-y-1 p-[15px] rounded-[15px] bg-white/[.03]"
								/>
							);
						})}
					</div>
					<div className="h-full flex flex-col">
						<Label className="h-fit text-base">Added</Label>
						<div className="h-full flex flex-col gap-y-[35px]">
							{GuestLists.map((list) => {
								return (
									<span
										key={list.id}
										className="text-[30px] font-medium"
										style={{ color: list.color }}
									>
										{list.added}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
