import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
	return (
		<motion.div
			animate={{
				borderRadius: [
					'20%',
					'20%',
					'50%',
					'80%',
					'20%',
				],
				opacity: [
					0.1,
					0.2,
					0.4,
					0.8,
					0.1,
					1.0,
				],
				scale: [
					1,
					2,
					2,
					3,
					1,
				],
			}}
			className='
				flex
				items-center
				justify-center
				relative
			'
			initial={{
				opacity: 0,
			}}
			transition={{
				duration: 1,
				repeat: Infinity,
				repeatDelay: 5,
			}}
		>
			<div
				className='
					absolute
					animate-ping
					border
					border-[#636]
					h-[200px]
					mt-52
					rounded-full
					w-[200px]
				'
			/>
			<div
				className='
					absolute
					animate-ping
					border
					border-[#636]
					h-[300px]
					mt-52
					rounded-full
					w-[300px]
				'
			/>
			<div
				className='
					absolute
					animate-ping
					border
					border-[#636]
					h-[500px]
					mt-52
					rounded-full
					w-[500px]
				'
			/>
			<div
				className='
					absolute
					animate-pulse
					border-2
					border-[#363]
					h-[650px]
					mt-52
					opacity-20
					rounded-full
					w-[650px]
				'
			/>
			<div
				className='
					absolute
					animate-ping
					border
					border-[#636]
					h-[800px]
					mt-52
					rounded-full
					w-[800px]
				'
			/>
		</motion.div>
	);
};
