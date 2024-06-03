import { twMerge } from 'tailwind-merge';

import Container from './Container';
import DoughnutChart from './DoughnutChart';
import Label from './Label';

import charPercentage from '../utils/format/chartPercentage';

// Chart data for tickets sold
const TicketsSoldData = {
	mainText: charPercentage(95.4, 100),
	data: [
		{
			value: 95.4 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display. *Find Fix if going to use value*
			name: 'Tickets Scanned',
			itemStyle: {
				color: 'rgba(81, 255, 171, 1)',
			},
		},
	],
};

export default function EventStatistics() {
	return (
		<div className="min-h-[280px] w-[816px] flex flex-row flex-wrap gap-5 justify-center">
			<StatisticContainer
				id="Tickets-Sold"
				data={[{ label: 'Tickets Sold', value: '765' }]}
				className="w-[338px] flex-row justify-between items-center"
			>
				<DoughnutChart
					data={TicketsSoldData}
					textSize={20}
					style={{ height: '120px', width: '120px' }}
				/>
			</StatisticContainer>
			<StatisticContainer
				id="Perks-Sold"
				data={[{ label: 'Perks sold', value: '1,532' }]}
			/>
			<StatisticContainer
				id="Scan-Speed"
				data={[{ label: 'Scan speed', value: '1.2s' }]}
			/>
			<StatisticContainer
				id="Averages"
				data={[
					{ label: 'Average ticket sale', value: '$52' },
					{ label: 'Average perk sale', value: '$35' },
					{ label: 'Average sale', value: '$87' },
				]}
				className="h-fit [@media(min-width:580px)]:h-[130px] [@media(min-width:580px)]:w-[577px] w-[219px] flex flex-row items-center justify-between flex-wrap text-green"
			/>
			<StatisticContainer
				id="Earnings"
				data={[{ label: 'Earnings', value: '$6,350' }]}
				className=" text-green"
			/>
		</div>
	);
}

function StatisticContainer({ className, children, data, ...props }) {
	return (
		<Container
			className={twMerge('h-[130px] w-[219px] p-[30px] text-white', className)}
			{...props}
		>
			{data.map((statistic) => {
				return <StatisticLabel key={statistic.label} data={statistic} />;
			})}
			{children}
		</Container>
	);
}

function StatisticLabel({ data }) {
	const { label, value } = data;
	return (
		<div className="h-fit w-full [@media(min-width:580px)]:w-fit flex flex-col [@media(max-width:580px)]:items-center">
			<Label className="w-fit text-base">{label}</Label>
			<span className="h-fit w-fit text-[30px] font-medium">{value}</span>
		</div>
	);
}
