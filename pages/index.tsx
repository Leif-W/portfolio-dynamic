import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home({}: NextPage) {
	return (
		<div>
			<Head>
				<title>Leif Westerlind&apos;s Dynamic Portfolio</title>
				</Head>

			{/* Header */}
			<Header />

			{/* Hero */}
			<section id='hero'>
			<Hero />
			</section>

			{/* About */}

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact */}

		</div>
	);
};
