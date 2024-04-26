/**
 * @format
 * @type {import('next').NextConfig}
 */

const path = require("path");

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.alias = {
				"@": path.resolve(__dirname, "src"),
			};
		}

		return config;
	},
};

module.exports = nextConfig;
