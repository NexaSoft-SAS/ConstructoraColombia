export interface Project {
	id: string
	name: string
	locality: string
	release: Date
	age: number
	realName: string
	builtArea: number
	privateArea: number
	address: string
	addressName?: string
	price: number
	versus: string | string[]
	bedrooms?: string
	toilets?: number
	socials: {
		youtube?: string
	}
	testimonials?: Array<{
		text: string
		url: string
	}>
	workout?: {
		videoID: string
		thumbnail: string
	}
	rotate?: boolean
	allies?: string[]
}

const addGetters = (projectsWithoutAge: Omit<Project, "age">[]): Project[] => {
	return projectsWithoutAge.map((boxerWithoutAge) => ({
		...boxerWithoutAge,
		get age() {
			return new Date(new Date().getTime() - this.release.getTime()).getFullYear() - 1970
		},
		// El enemigo de mi enemigo es mi amigo
		get allies() {
			return projectsWithoutAge
				.filter(
					(ally) =>
						(Array.isArray(ally.versus)
							? ally.versus.every((opponent) => this.versus.includes(opponent))
							: false) && ally.id !== this.id
				)
				.map((ally) => ally.id)
		},
	}))
}

export const PROJECTS: Project[] = addGetters([
	{
		id: "edificio-1",
		name: "Edificio Uno",
		realName: "Edificio Uno",
		locality: "Puente Aranda",
		release: new Date(2021, 6, 23),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-1",
		bedrooms: "Dos",
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		testimonials: [
			{
				text: "Excelente proyecto inmobiliario.",
				url: "https://youtube.com/@ConstructoraColombiaOficial",
			},
		],
	},
	{
		id: "edificio-2",
		name: "Edificio Dos",
		realName: "Edificio Dos",
		locality: "Puente Aranda",
		release: new Date(2021, 10, 3),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-2",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
	},
	{
		id: "edificio-3",
		name: "Edificio Tres",
		realName: "Edificio Tres",
		locality: "Puente Aranda",
		release: new Date(2021, 11, 15),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-3",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		// workout: {
		// 	videoID: "",
		// 	thumbnail: "/img/projects/workoutThumbnails/",
		// },
	},
	{
		id: "edificio-4",
		name: "Edificio Cuatro",
		realName: "Edificio Cuatro",
		locality: "Puente Aranda",
		release: new Date(1990, 5, 8),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-4",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "edificio-5",
		name: "Edificio Cinco",
		realName: "Edificio Cinco",
		locality: "Puente Aranda",
		release: new Date(2021, 4, 1),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-5",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "edificio-6",
		name: "Edificio Seis",
		realName: "Edificio Seis",
		locality: "Puente Aranda",
		release: new Date(2021, 2, 1),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-6",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
	},
	{
		id: "edificio-7",
		name: "Edificio Siete",
		realName: "Edificio Siete",
		locality: "Puente Aranda",
		release: new Date(2021, 8, 20),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-7",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		testimonials: [
			{
				text: "Satisfecho con mi nueva vivienda, lucen geniales los acabados",
				url: "https://youtube.com/@ConstructoraColombiaOficial",
			},
		],
	},

	{
		id: "edificio-8",
		name: "Edificio Ocho",
		realName: "Edificio Ocho",
		locality: "Puente Aranda",
		release: new Date(2021, 3, 4),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-8",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "edificio-9",
		name: "Edificio Nueve",
		realName: "Edificio Nueve",
		locality: "Puente Aranda",
		release: new Date(2021, 8, 28),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-9",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "edificio-10",
		name: "Edificio Diez",
		realName: "Edificio Diez",
		locality: "Puente Aranda",
		release: new Date(2021, 8, 8),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-10",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
	},
	{
		id: "edificio-11",
		name: "Edificio Once",
		realName: "Edificio Once",
		locality: "Puente Aranda",
		release: new Date(2021, 10, 18),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-11",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
	},
	{
		id: "edificio-12",
		name: "Edificio Doce",
		realName: "Edificio Doce",
		locality: "Puente Aranda",
		release: new Date(2021, 9, 9),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Bogotá",
		price: 0,
		versus: "edificio-12",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "http://youtube.com/@ConstructoraColombiaOficial",
		},
	},
] as const)
