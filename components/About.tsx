import React from 'react';

type Props = {};

export default function About({}: Props) {
	return (
		<div
			className='
				flex
				flex-col
				h-screen
				items-center
				justify-evenly
				max-w-7xl
				md:flex-row
				md:text-left
				mx-auto
				px-10
				relative
				text-center
			'
		>
			<h3
				className='
					absolute
					text-[#0F0]
					text-2xl
					top-24
					tracking-[1.25em]
					uppercase
				'
			>About</h3>
		</div>
	);
};
