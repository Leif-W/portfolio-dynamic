import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

export default function Hero({ }: Props) {
	const [text, count] = useTypewriter({
		delaySpeed: 1500,
		loop: true,
		words: [
			'Leif Westerlind',
			'Developer',
			'Designer',
			'Hacker',
		],
	});

	return (
		<div>
			<h1>
				<span>
					{text}
					<Cursor cursorColor='#0F0' />
				</span>
			</h1>
		</div>
	);
};
