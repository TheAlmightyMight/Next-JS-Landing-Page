/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	poweredByHeader: false,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	export: 'static',
}

module.exports = nextConfig
