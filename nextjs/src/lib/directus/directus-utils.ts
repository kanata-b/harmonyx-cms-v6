import { DirectusFile } from '@/types/directus-schema';

export function getDirectusAssetURL(fileOrString: string | DirectusFile | null | undefined): string {
	if (!fileOrString) return '';

	// Use different URLs for server-side vs client-side
	const assetUrl = typeof window === 'undefined'
		? (process.env.DIRECTUS_ASSET_URL || process.env.NEXT_PUBLIC_DIRECTUS_ASSET_URL)
		: process.env.NEXT_PUBLIC_DIRECTUS_ASSET_URL;

	if (typeof fileOrString === 'string') {
		return `${assetUrl}/assets/${fileOrString}`;
	}

	return `${assetUrl}/assets/${fileOrString.id}`;
}
