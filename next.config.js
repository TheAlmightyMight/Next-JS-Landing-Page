/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	poweredByHeader: false,
	sassOptions: {
		includePaths: [path.join(__dirname, '/src/sass/')],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	export: 'static',
}

module.exports = nextConfig
