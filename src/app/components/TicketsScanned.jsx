import Button from './Button';
import Container from './Container';
import DoughnutChart from './DoughnutChart';
import Label from './Label';

import charPercentage from '../utils/format/chartPercentage';

// Chart data for tickets scanned
const TicketsScannedData = {
	max: 500,
	mainText: charPercentage(226, 500),
	subText: '226/500',
	data: [
		{
			value: 226 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display. *Find Fix if going to use value*
			name: 'Tickets Scanned',
			itemStyle: {
				color: 'rgba(255, 248, 72, 1)',
			},
		},
	],
};

// Data for tickets scanned member
const TicketsScannedMembers = [
	{
		id: '1',
		image:
			'https://s3-alpha-sig.figma.com/img/67d9/d81b/32a32cc360ada4ad9e9156cb3b23738d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T76vOcCz2upauvZmVukQvn45TOMEGTWUX58ceOAsVrKISGw2HjCZLPFRx6xe4dzIFEsaecS8-LSYLgZfcS7bdyhrPb3-raHmCluNc6sErVhKVd90-jT7ahDBTQCHtW-sfVT4y7usPayxKp7Tr6WihmsDuMxG613MR2kMr3HbsLhl~FyOdj2t3GG570FCzAZCoEeJNV7dF46ETn6aJZPbtx1HHJ91adXtiSCQnjITM9KoFbVZVIdGGjH1yIRXh4PRajBl8f0cY4gG7qoZebBJZeFR8Wmvg0YJ1pVkFfd9Mwbil3zTp2peAXgF8t4kUVhaob55ge8~bmM70NUUyxW7NQ__',
		name: 'John Doe',
		numTicketsScanned: '76',
	},
	{
		id: '2',
		image:
			'https://s3-alpha-sig.figma.com/img/9e56/c58a/67cc784eb23d3016e11eecf846367fa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lFsJc3Lvd-1aGtj6x8OfZe79bF~FVcCkzE-S78CCDHAPOrVc3SHw36EGcjudh0C2z8gzlYeyV2hhL1ebsUfZv7q7ufEMpsif563SDvFcVu-rVH1VdzgIetsFvig9ZOZdIBsfVRUA7E1FRazurBTGq-XrD-ASCZj38~9If-1Suv79~UgilImpx6kEh3nl3DLZP5wTW2GHeD2hE3SQUtPw03OspLG39bR0BZZB6YsNNt1w~P9Fvlfb~s9EwS4RV4aOZlZ6I0edv7yi81kLlo5oTb9CX~yjNLNEROl6v6ERfP7NHqqBZ31-njF0hU3yJCQ6zDeT7B92yu6C2qat6KWCLw__',
		name: 'John Doe',
		numTicketsScanned: '82',
	},
	{
		id: '3',
		image:
			'https://s3-alpha-sig.figma.com/img/9044/2031/d78595ef7baca102352ac315d5f29c63?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GcGv3EsjWessJiCwPP0uUTtxUuHs3147KDP9F59WWqDw~iBpIKBRjesb~b7Ui4RGRlK4Rbkmw0XEsUdSV7H~hwr9gyeZ2S-3b6EfZ7DlZEgaKM92gNf4rII80oF7wQJrclCJdlR0zsiB8EUTCHeIcXYNgtBgjuY0C6JRFuBqmOpZuN9OQvV~sT0XudpfJrI1d-CzOo0P062y-2VgTRC3zoxKjkq2V9aR3RmzoKGf0sRP1cFij80gWztEMWHfyupHweruHxFvmdPTxAUSLPUD~DG2iA~2Gnopu2wSXMzvfUpGyXWzKtfDzYfGr1F0~7juwxqKL7uKaZXDZ1SDXBIrxw__',
		name: 'John Doe',
		numTicketsScanned: '68',
	},
];

export default function TicketsScanned() {
	return (
		<Container
			id="Tickets-Scanned"
			className="min-h-[310px] w-[577px] gap-y-[15px]"
		>
			<div className="flex flex-row justify-between h-10 text-center pl-[20px] pr-[10px]">
				<Label className="max-w-[50%]">Tickets Scanned</Label>
				<Button>View Team</Button>
			</div>
			<div className="flex flex-row h-fit w-full gap-x-10 items-center flex-wrap justify-center">
				<DoughnutChart
					data={TicketsScannedData}
					style={{ height: '200px', width: '200px' }}
				/>
				<div className="flex flex-col gap-y-[10px]">
					{TicketsScannedMembers.map((member) => {
						return <TicketsScannedMember key={member.id} data={member} />;
					})}
				</div>
			</div>
		</Container>
	);
}

function TicketsScannedMember({ data }) {
	const { image, name, numTicketsScanned } = data;
	return (
		<Container className="w-[300px] max-w-[80vw] h-[70px] flex-row rounded-[15px] pl-[10px] pt-[10px] pr-[15px] pb-[10px] items-center">
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
