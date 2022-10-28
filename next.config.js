/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: [
			'localhost:3000',
			// 'https://foo.bar/img.png',
		],
	},
	reactStrictMode: true,
	swcMinify: true,
};
