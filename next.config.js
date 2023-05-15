/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	poweredByHeader: false,
	sassOptions: {
		includePaths: [path.join(__dirname, '/src/sass/')],
	},
}

module.exports = nextConfig
