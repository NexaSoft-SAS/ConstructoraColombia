export interface Combat {
	id: string
	projects: string[] // es un string porque hace referencia a los ids de los proyectos
}

export const COMBATS: Combat[] = [
	{
		id: "1",
		projects: ["edificio-genesis"],
	},
	{
		id: "2",
		projects: ["edificio-alcala"],
	},
	{
		id: "3",
		projects: ["casas-britalia-uno"],
	},
	{
		id: "4",
		projects: ["casas-britalia-dos"],
	},
	{
		id: "5",
		projects: ["casas-britalia-tres"],
	},
	{
		id: "6",
		projects: ["casas-divino-niño"],
	},
	{
		id: "7",
		projects: ["casas-san-bernardino"],
	},
	{
		id: "8",
		projects: ["apartamento-molinos-dos"],
	},
	{
		id: "9",
		projects: ["casas-la-paz"],
	},
	{
		id: "10",
		projects: ["casas-piamonte"],
	},
	// {
	// 	id: "11",
	// 	projects: ["edificio-11"],
	// },
	// {
	// 	id: "12",
	// 	projects: ["edificio-12"],
	// },
]
