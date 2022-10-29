import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({ }: Props) {
	const [text, count] = useTypewriter({
		delaySpeed: 1500,
		loop: true,
		words: [
			'Leif Westerlind',
			'Developer',
			'Designer',
			'Hacker',
		],
	});

	return (
		<div
			className='
				flex
				flex-col
				h-screen
				items-center
				justify-center
				overflow-hidden
				space-y-8
				text-center
			'
		>
			<BackgroundCircles />
			<div
				className='
					h-32
					mx-auto
					relative
					w-32
				'
			>
				<Image
					alt='portrait'
					className='
						object-cover
						rounded-full
					'
					fill
					priority
					sizes='
						(max-width: 768px) 4rem,
              			(max-width: 1200px) 6rem,
              			8rem
					'
					src='/Warp9pnt9.png'
				/>
			</div>
			<div>
				<h2
					className='
						pb-2
						text-[#080]
						text-sm
						tracking-[0.75rem]
						uppercase
					'
				>General Hacker</h2>
				<h1
					className='
						font-semibold
						lg:text-6xl
						px-[0.75rem]
						text-5xl
					'
				>
					<span
						className='
							mr-[0.375rem]
						'
					>{text}</span>
					<Cursor	cursorColor='#0F0' />
				</h1>
			</div>
		</div>
	);
};
