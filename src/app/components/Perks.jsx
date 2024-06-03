import Button from './Button';
import Container from './Container';
import Label from './Label';
import Slider from './Slider';

// Data for perks
const PerksData = [
	{
		id: '1',
		img: 'https://s3-alpha-sig.figma.com/img/f042/9777/2e8cb750168aea7c791a522020385bae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBRZ7Ixtu0~JB8k9w~IZDNM-kR1wqoDctigptEuEkEH22DMjQxe0l-kz35A3n4JHz0zBXfQKl2AX3u4vpOO1CX8iJetGq6qMmw9VQoL3cOfBpd6d9Pozir6ZmYkQdTVxhAhiFJynEs0fF~qkvtlQb7CVp09fpV~77c0ydediAwYt10aQ~I-EQeInO93mexflKiBeqOe-L-gdsZRtK6PEDwdTMwFc9N8v~GFrPU1lVMA4Qp4gyfhRrQgSnNTjI0ylZ8H0MvoiKs5gDxRiVBymSwKS0Tly62kJYDq2Ako3cfdda9TFVH10oTG7JZRWsZSPxkOmizqsnIrX6o7oCgfZSA__',
		name: 'Vodka and Juice',
		quantity: 136,
		quantityMax: 850,
		total: 1150,
		totalMax: 7185,
	},
	{
		id: '2',
		img: 'https://s3-alpha-sig.figma.com/img/c831/f02a/e9b8a1fdb9659c1c696a9da7986e9ad8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OcnjzFkMkbFvEwQ1n0YrDKPxo8f5ArjCiNkCLhRopTptkZy79z-Jy5roNQ9c3n7Ly0ow~bjAQXy61y7fw0EmPiZjzFzSmeTaXI6Tjk8B0ljrT6aBoq4tg45~gIWVZkzVRPn9Rw-XVhWRfWbGTyYVlq7W2~FYd5h-2Z16p2aBHXbY~0KQesHkS4nUG4jGp6G89Cjw~Ql8TEeKTyWT~taONGEU~XpWbtVwao0Cl00Jw~4Lhx52LqpcmPeLZnPtD0PBTPsmhto8TTkavukXaRzYjXLZNH1xkHCQWEyfh0vIE2tYEBAT8rAn8OksMGRkyoiPpqLeS9Y7AagHdhVuQgm5uw__',
		name: 'T-Shirt',
		quantity: 35,
		quantityMax: 50,
		total: 853,
		totalMax: 1218,
	},
	{
		id: '3',
		img: 'https://s3-alpha-sig.figma.com/img/ecc5/1d0b/a6a0908be5cab96f8c8627f42a534945?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKVqn8pHA~SnmRdfsUcXbEEU438mwuG5br2FjGbeNMQhU7vToYEqDsn7GkkEycL4nREQ0am0CETNmMaBPclYk3DVUcX~cJUPn1ntkBW2g5RjYl5DIVPJbJsH5ZatnLIOpXzn2zHNiSjINv1apiKicWjwJZJ0IMAmhKQ8d7jIpAfKZwcBI1awRp-H~ZBNXZuUwT4nQtujYMKiKXLpE2XMRmvwLsRNYr6xYuMgLhy6qQU-3VKigZJV8bOgW7TkWvZHvy~QFZweeDQukMob65m-MF9u5H40AN~6GAWJDj7A1iBsVhiC3kyTQD1pRsJdIlOTqXl6bzOPcCLcwJXZSFqgqw__',
		name: 'Bottles',
		quantity: 25,
		quantityMax: 120,
		total: 5396,
		totalMax: 25900,
	},
	{
		id: '4',
		img: 'https://s3-alpha-sig.figma.com/img/f042/9777/2e8cb750168aea7c791a522020385bae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBRZ7Ixtu0~JB8k9w~IZDNM-kR1wqoDctigptEuEkEH22DMjQxe0l-kz35A3n4JHz0zBXfQKl2AX3u4vpOO1CX8iJetGq6qMmw9VQoL3cOfBpd6d9Pozir6ZmYkQdTVxhAhiFJynEs0fF~qkvtlQb7CVp09fpV~77c0ydediAwYt10aQ~I-EQeInO93mexflKiBeqOe-L-gdsZRtK6PEDwdTMwFc9N8v~GFrPU1lVMA4Qp4gyfhRrQgSnNTjI0ylZ8H0MvoiKs5gDxRiVBymSwKS0Tly62kJYDq2Ako3cfdda9TFVH10oTG7JZRWsZSPxkOmizqsnIrX6o7oCgfZSA__',
		name: 'Moscow mule',
		quantity: 20,
		quantityMax: 220,
		total: 230,
		totalMax: 2530,
	},
	{
		id: '5',
		img: 'https://s3-alpha-sig.figma.com/img/f042/9777/2e8cb750168aea7c791a522020385bae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBRZ7Ixtu0~JB8k9w~IZDNM-kR1wqoDctigptEuEkEH22DMjQxe0l-kz35A3n4JHz0zBXfQKl2AX3u4vpOO1CX8iJetGq6qMmw9VQoL3cOfBpd6d9Pozir6ZmYkQdTVxhAhiFJynEs0fF~qkvtlQb7CVp09fpV~77c0ydediAwYt10aQ~I-EQeInO93mexflKiBeqOe-L-gdsZRtK6PEDwdTMwFc9N8v~GFrPU1lVMA4Qp4gyfhRrQgSnNTjI0ylZ8H0MvoiKs5gDxRiVBymSwKS0Tly62kJYDq2Ako3cfdda9TFVH10oTG7JZRWsZSPxkOmizqsnIrX6o7oCgfZSA__',
		name: 'Moscow mule',
		quantity: 20,
		quantityMax: 220,
		total: 230,
		totalMax: 2530,
	},
	{
		id: '6',
		img: 'https://s3-alpha-sig.figma.com/img/f042/9777/2e8cb750168aea7c791a522020385bae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBRZ7Ixtu0~JB8k9w~IZDNM-kR1wqoDctigptEuEkEH22DMjQxe0l-kz35A3n4JHz0zBXfQKl2AX3u4vpOO1CX8iJetGq6qMmw9VQoL3cOfBpd6d9Pozir6ZmYkQdTVxhAhiFJynEs0fF~qkvtlQb7CVp09fpV~77c0ydediAwYt10aQ~I-EQeInO93mexflKiBeqOe-L-gdsZRtK6PEDwdTMwFc9N8v~GFrPU1lVMA4Qp4gyfhRrQgSnNTjI0ylZ8H0MvoiKs5gDxRiVBymSwKS0Tly62kJYDq2Ako3cfdda9TFVH10oTG7JZRWsZSPxkOmizqsnIrX6o7oCgfZSA__',
		name: 'Moscow mule',
		quantity: 20,
		quantityMax: 220,
		total: 230,
		totalMax: 2530,
	},
	{
		id: '7',
		img: 'https://s3-alpha-sig.figma.com/img/f042/9777/2e8cb750168aea7c791a522020385bae?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBRZ7Ixtu0~JB8k9w~IZDNM-kR1wqoDctigptEuEkEH22DMjQxe0l-kz35A3n4JHz0zBXfQKl2AX3u4vpOO1CX8iJetGq6qMmw9VQoL3cOfBpd6d9Pozir6ZmYkQdTVxhAhiFJynEs0fF~qkvtlQb7CVp09fpV~77c0ydediAwYt10aQ~I-EQeInO93mexflKiBeqOe-L-gdsZRtK6PEDwdTMwFc9N8v~GFrPU1lVMA4Qp4gyfhRrQgSnNTjI0ylZ8H0MvoiKs5gDxRiVBymSwKS0Tly62kJYDq2Ako3cfdda9TFVH10oTG7JZRWsZSPxkOmizqsnIrX6o7oCgfZSA__',
		name: 'Moscow mule',
		quantity: 20,
		quantityMax: 220,
		total: 230,
		totalMax: 2530,
	},
];

export default function Perks() {
	return (
		<Container id="Perks-Sold" className="gap-y-[15px] min-h-[835px] w-[577px]">
			<div className="flex flex-row justify-between h-10 text-center pl-[20px] pr-[10px]">
				<Label className="max-w-[50%]">Perks Sold</Label>
				<Button>Create a perk</Button>
			</div>
			{PerksData.map((perk) => {
				return (
					<PerkItem key={perk.id} data={perk} color="rgba(81, 255, 171, 1)" />
				);
			})}
		</Container>
	);
}

function PerkItem({ color, className, data }) {
	const { img } = data;
	return (
		<div className="min-h-[95px] w-[550px] max-w-[90vw] flex gap-x-5 rounded-[15px] bg-white/[.03] p-[15px] items-center">
			<img
				className="h-[65px] w-[65px] border border-white/20 rounded-[5px] object-cover"
				src={img}
				alt=""
			/>
			<Slider data={data} className={className} color={color} />
		</div>
	);
}
