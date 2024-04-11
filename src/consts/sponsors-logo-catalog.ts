import type { SPONSORS } from "@/consts/sponsors"

export type SponsorId = (typeof SPONSORS)[number]["id"]

type SVGPathAttributeNames =
	| "fill"
	| "stroke"
	| "stroke-width"
	| "stroke-linecap"
	| "stroke-linejoin"
	| "stroke-miterlimit"
	| "fill-rule"
	| "clip-rule"

interface PathOption {
	/**
	 * The name of the attribute (e.g., "fill", "stroke").
	 */
	attribute: SVGPathAttributeNames

	/**
	 * The value of the attribute.
	 */
	value: string
}

interface LogoPath {
	/**
	 * The SVG path data.
	 */
	path: string

	/**
	 * Optional attributes to apply to the path.
	 */
	options?: Array<PathOption>
}

interface LogoType {
	/**
	 * The viewBox attribute of the SVG, defining the aspect ratio and scaling.
	 */
	viewBox: string

	/**
	 * An array of LogoPath objects, each representing a path in the SVG.
	 */
	paths: Array<LogoPath>
}

export const SponsorsLogoCatalog: Record<SponsorId, LogoType> = {
	nexasoft: {
		viewBox: "0 0 132 35",
		paths: [
			{
				path: "",
				options: [
					{
						attribute: "stroke-miterlimit",
						value: "10",
					},
				],
			},
		],
	},
	arenasyGravasElImperio: {
		viewBox: "0 0 132 35",
		paths: [
			{
				path: "",
				options: [
					{
						attribute: "stroke-miterlimit",
						value: "10",
					},
				],
			},
		],
	},
} as const
