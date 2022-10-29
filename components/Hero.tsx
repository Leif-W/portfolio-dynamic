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
					src='/Warp9pnt9.png'
				/>
			</div>
			<div>
				<h1>
					<span>
						{text}
					</span>
					<Cursor	cursorColor='#0F0' />
				</h1>
			</div>
		</div>
	);
};
