import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article>
			<motion.div
				className='
					h-32
					md:h-40
					md:w-40
					relative
					w-32
					xl:h-48
					xl:w-48
				'
				initial={{
					opacity: 0,
					y: -100,
				}}
				transition={{ duration: 0.75 }}
				viewport={{ once: false }}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
			>
				<Image
					alt='portrait'
					className='
						object-center
						object-contain
						rounded-full
					'
					fill
					sizes='
						(max-width: 768px) 8rem,
              			(max-width: 1200px) 10rem,
              			12rem
					'
					src='/Warp9pnt9.png'
				/>
			</motion.div>
			<div>
				<h4
					className='
					'
				>CEO of Company, Inc.</h4>
				<span>Company, Inc.</span>
				<span>
					{/* Tech icon */}
					{/* Tech icon */}
					{/* Tech icon */}
				</span>
				<span>2002 - 2022</span>
				<ul>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
};
