import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function Experience({}: Props) {
	return (
		<motion.div
			className='
				flex
				flex-col
				h-screen
				items-center
				justify-evenly
				max-w-full
				md:flex-row
				mx-auto
				overflow-hidden
				px-10
				relative
				text-left
			'
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			whileInView={{ opacity: 1 }}
		>
			<h3
				className='
					absolute
					text-2xl
					top-24
					tracking-[1.25em]
					uppercase
				'
			>Experience</h3>
			<div>
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
};
