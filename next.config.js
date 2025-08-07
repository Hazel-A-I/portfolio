/**
 * @format
 * @type {import('next').NextConfig}
 */

import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
	sassOptions: {
		includePaths: [join(__dirname, "styles")],
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.alias = {
				"@": resolve(__dirname, "src"),
			};
		}

		return config;
	},
	output: "export",
	basePath: "/portfolio",
	assetPrefix: "/portfolio/",
};

export default nextConfig;
