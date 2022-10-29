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
			<div
				className='
					md:px-10
					px-0
					space-y-10
				'
			>
				{/* Ugly formatting necessary to maintain spaces around and underline of span tag. */}
				<h4
					className='
						text-[#B0B]
						text-4xl
						font-semibold
					'
				>Here is a
					<span
						className='
							px-2
							underline
							decoration-[#0F0]/50
						'
					>little</span>
					background.</h4>
				{/* TODO: Change Lorem Ipsum text */}
				<p
					className='
						text-[#2F2]
						text-base
					'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
};
