// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://constructoracolombia.co/", // Production URL.
	description:
		"Web Oficial de Constructora Colombia, Desarrolladora inmobiliaria de proyectos de propiedad horizontal residencial.",
	type: "website",
	image: {
		url: "https://constructoracolombia.co/img/og.jpg",
		alt: "Constructora Colombia",
		width: 705,
		height: 606,
	},
	siteName: "Constructora Colombia",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Constructora Colombia",
	short_name: "Constructora Colombia",
	description:
		"Web Oficial de Constructora Colombia, Desarrolladora inmobiliaria de proyectos de propiedad horizontal residencial.",
	theme_color: "#f0bd22",
	background_color: "#f0bd22",
	display: "fullscreen",
	icons: [
		{
			src: "/img/icons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
		{
			src: "/img/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable",
		},
	],
}
