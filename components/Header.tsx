import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className='
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
		'>
			{/* Social icons */}
			<div
				className='
					flex
					flex-row
					items-center
				'
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
			</div>

			{/* Mail */}
			<div
				className='
					cursor-pointer
					flex
					flex-row
					items-center
					text-gray-300
				'
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
			</div>
		</header>
	);
};
