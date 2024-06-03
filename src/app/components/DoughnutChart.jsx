'use client';

import ReactEcharts from 'echarts-for-react';

export default function DoughnutChart({ textSize, data, ...props }) {
	const option = {
		title: {
			text: data.mainText,
			subtext: data.subText,
			top: data?.subText ? '37.5%' : '40%',
			left: 'center',
			textStyle: {
				fontSize: textSize ?? (data.subText ? 25 : 32),
				color: 'white',
			},
			subtextStyle: {
				fontSize: 16,
				color: 'rgba(255, 255, 255, 0.6)',
			},
			itemGap: 0,
		},
		series: [
			{
				type: 'gauge',
				startAngle: 90 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display
				endAngle: -270 - 5, //Round cap styling adds to the area for some reason, subtracted 5 for a more accurate display
				min: 0,
				max: data.max ?? 100,
				silent: true,
				progress: {
					show: true,
					roundCap: true,
					width: 10,
				},
				emphasis: { disabled: true },
				pointer: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: [[1, 'rgba(255, 255, 255, .2)']],
					},
				},
				axisLabel: { show: false },
				axisTick: { show: false },
				splitLine: { show: false },
				label: { show: false },
				title: {
					show: false,
				},
				detail: {
					show: false,
				},
				data: data.data,
			},
		],
	};
	return <ReactEcharts option={option} {...props} />;
}
