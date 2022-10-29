import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home({}: NextPage) {
	return (
		<div
			className='
				bg-[#171717]
				h-screen
				overflow-scroll
				snap-y
				snap-mandatory
				text-[#0f0]
				z-0
			'
		>
			<Head>
				<title>Leif Westerlind&apos;s Dynamic Portfolio</title>
				</Head>

			{/* Header */}
			<Header />

			{/* Hero */}
			<section
				className='
					snap-start
				'
				id='hero'
			>
				<Hero />
			</section>

			{/* About */}
			<section
				className='
					snap-center
				'
				id='about'
			>
				<About />
			</section>

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact */}

		</div>
	);
};
