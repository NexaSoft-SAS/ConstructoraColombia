type SponsorId = "nexasoft"
type SponsorName = "Nexasoft"

interface Sponsors {
	id: SponsorId
	name: SponsorName
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
] as const
