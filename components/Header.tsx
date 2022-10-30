import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

type Props = {};

export default function Header({}: Props) {
	return (
		<header
			className='
				flex
				items-start
				justify-between
				max-w-7xl
				mx-auto
				p-5
				sticky
				top-0
				xl:items-center
				z-20
			'
		>
			{/* Social icons */}
			<motion.div
				animate={{
					opacity: 1,
					scale: 1,
					x: 0,
				}}
				className='
					flex
					flex-row
					items-center
				'
				initial={{
					opacity: 0,
					scale: 0.5,
					x: -150, // 50 * # SocialIcon TODO: calc dyn in func
				}}
				transition={{
					duration: 1.25,
				}}
			>
				<SocialIcon
					bgColor='transparent'
					fgColor='grey'
					url='https://t.me/user'
				/>
				<SocialIcon
					bgColor='transparent'
					fgColor='grey'
					url='https://twitter.com/user'
				/>
				<SocialIcon
					url='https://youtube.com/user'
					fgColor='grey'
					bgColor='transparent'
				/>
			</motion.div>

			{/* Mail */}
			<motion.div
				animate={{
					opacity: 1,
					scale: 1,
					x: 0,
				}}
				className='
					cursor-pointer
					flex
					flex-row
					items-center
					text-gray-300
				'
				initial={{
					opacity: 0,
					scale: 0.5,
					x: 125, // 50 SocialIcon + 75 text TODO: calc dyn in func
				}}
				transition={{
					duration: 1.25,
				}}
			>
				<SocialIcon
					bgColor='transparent'
					className='cursor-pointer'
					fgColor='grey'
					network='email'
				/>
				<p
					className='
						uppercase
						hidden
						md:inline-flex
						text-sm
						text-gray-400
					'
				>Contact</p>
			</motion.div>
		</header>
	);
};
