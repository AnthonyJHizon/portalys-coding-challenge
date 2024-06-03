import Container from './components/Container';
import DoughnutChart from './components/DoughnutChart';
import EventStatistics from './components/EventStatistics';
import GuestList from './components/GuestList';
import Label from './components/Label';
import Perks from './components/Perks';
import TicketsScanned from './components/TicketsScanned';
import Toolbar from './components/Toolbar';

import charPercentage from './utils/format/chartPercentage';

// Chart data for tickets at the door
const TicketsDoorData = {
	max: 100,
	mainText: charPercentage(35, 100),
	subText: '35/100',
	data: [
		{
			value: 35 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display. *Find Fix if going to use value*
			name: 'Tickets Scanned',
			itemStyle: {
				color: 'rgba(81, 255, 171, 1)',
			},
		},
	],
};

// Chart data for venue capacity
const VenueData = {
	mainText: charPercentage(84.6, 100),
	data: [
		{
			value: 84.6 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display. *Find Fix if going to use value*
			name: 'Tickets Scanned',
			itemStyle: {
				color: 'rgba(255, 143, 39, 1)',
			},
		},
	],
};

export default function Home() {
	return (
		<div className="h-screen w-screen bg-black overflow-y-auto overflow-x-hidden">
			<Toolbar />
			<main className="w-full flex flex-col items-center pb-10">
				<section className="w-full [@media(min-width:1473px)]:w-[1473px] flex justify-center flex-wrap gap-5">
					<div className="h-fit w-[816px] max-w-[90vw] flex flex-row flex-wrap items-center justify-center gap-5">
						<TicketsScanned />
						<Container id="Tickets-Door" className="min-h-[310px] w-[219px]">
							<Label className="w-full justify-center">
								Tickets at the door
							</Label>
							<DoughnutChart
								data={TicketsDoorData}
								style={{ height: '200px', width: '200px' }}
							/>
							<Container className="w-full flex-row rounded-[15px] justify-between p-[15px] text-base">
								<Label className="text-white">Last batch</Label>
								<span className="text-green">$75</span>
							</Container>
						</Container>
						<Container id="Venue-Capacity" className="max-h-[260px] w-[219px]">
							<Label className="pl-[20px] pr-[10px]">Venue Capacity</Label>
							<DoughnutChart
								data={VenueData}
								style={{ height: '200px', width: '200px' }}
							/>
						</Container>
						<GuestList />
						<EventStatistics />
					</div>
					<Perks />
				</section>
			</main>
		</div>
	);
}
