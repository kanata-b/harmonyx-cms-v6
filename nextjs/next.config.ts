import "./env.mjs";
import type { NextConfig } from 'next';
import initializeBundleAnalyzer from '@next/bundle-analyzer';
import { generateRedirects } from './src/lib/redirects';

const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

const withBundleAnalyzer = initializeBundleAnalyzer({
	enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true',
});

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    frame-src *;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src *;
    connect-src *;
    font-src 'self' data:;
    frame-ancestors 'self' ${process.env.NEXT_PUBLIC_SITE_URL} ${process.env.NEXT_PUBLIC_DIRECTUS_URL};
`;

const nextConfig: NextConfig = {
	 experimental: {
		serverActions: {
			bodySizeLimit: "2mb",
		},
		// Enable Fast Refresh for better DX
		turbo: {
			rules: {
				"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
				},
			},
		},
	},
	// Improve Fast Refresh performance
	onDemandEntries: {
		maxInactiveAge: 25 * 1000,
		pagesBufferLength: 2,
	},
	poweredByHeader: false,
	// Disable ESLint during build in Docker
	eslint: {
		ignoreDuringBuilds: process.env.NODE_ENV === 'production',
	},
	// Disable TypeScript errors during build for Docker
	typescript: {
		ignoreBuildErrors: process.env.NODE_ENV === 'production',
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8000',
				pathname: '/cms/assets/**',
			},
			{
				protocol: 'http',
				hostname: 'directus',
				port: '8055',
				pathname: '/assets/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8055',
				pathname: '/assets/**',
			},
		],
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: ContentSecurityPolicy.replace(/\n/g, '').trim(),
					},
				],
			},
		];
	},
	async redirects() {
		const redirects = await generateRedirects();

		return redirects;
	},
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
