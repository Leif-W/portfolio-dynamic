import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
			<motion.div
				className='
					-mb-20
					flex-shrink-0
					h-48
					md:h-72
					md:mb-0
					md:w-72
					mx-auto
					relative
					w-48
					xl:h-96
					xl:w-96
				'
				initial={{
					opacity: 0,
					x: -200,
				}}
				transition={{
					duration: 0.75,
				}}
				viewport={{
					once: true,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
			>
				<Image
					alt='portrait'
					className='
						md:rounded-lg
						object-cover
						rounded-full
					'
					fill
					priority
					sizes='
						(max-width: 768px) 12rem,
              			(max-width: 1200px) 18rem,
              			24rem
					'
					src='/Warp9pnt9.png'
				/>
			</motion.div>
		</div>
	);
};
