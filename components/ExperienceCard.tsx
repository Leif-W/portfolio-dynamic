import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article
			className='
				flex
				flex-col
				flex-shrink-0
				items-center
				md:w-[37.5rem]
				rounded-lg
				space-y-7
				w-[31.25rem]
				xl:w-[56.25rem]
			'
		>
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
			<div
				className='
					md:px-10
					px-0
				'
			>
				<h4
					className='
						font-light
						text-4xl
					'
				>CEO of Company, Inc.</h4>
				<p
					className='
						font-bold
						mt-1
						text-2xl
					'
				>Company, Inc.</p>
				<p
					className='
						flex
						my-2
						space-x-2
					'
				>
					{/* Tech icon */}
					{/* Tech icon */}
					{/* Tech icon */}
				</p>
				<p
					className='
						py-5
						text-[#080]
						uppercase
					'
				>2002 - 2022</p>
				<ul
					className='
						list-disc
						ml-5
						space-y-4
						text-lg
					'
				>
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
