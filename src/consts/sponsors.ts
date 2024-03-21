// type SponsorId = "nexasoft"
// type SponsorName = "Nexasoft"

interface Sponsors {
	id: string // SponsorId
	name: string // SponsorName
	url: string
	image: {
		width: number
		height: number
	}
}

export const SPONSORS: Array<Sponsors> = [
	{
		id: "nexasoft",
		name: "Nexasoft",
		url: "https://www.nexasoft.dev/",
		image: {
			width: 164,
			height: 35,
		},
	},
	{
		id: "arenasyGravasElImperio",
		name: "Arenas & Gravas el Imperio",
		url: "https://www.constructoracolombia.co",
		image: {
			width: 164,
			height: 35,
		},
	},
] as const
