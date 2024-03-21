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
		id: "edificio-genesis",
		name: "Edificio Génesis",
		realName: "Edificio Génesis",
		locality: "Puente Aranda",
		release: new Date(2021, 6, 23),
		builtArea: 39,
		privateArea: 33.3,
		address: "Ciudad Montes, Bogotá",
		price: 0,
		versus: "edificio-genesis",
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
		id: "edificio-gloria",
		name: "Edificio Gloria",
		realName: "Edificio Gloria",
		locality: "Puente Aranda",
		release: new Date(2021, 10, 3),
		builtArea: 39,
		privateArea: 33.3,
		address: "Cl. 34 Sur #51b-45, Alcalá, Bogotá",
		price: 0,
		versus: "edificio-gloria",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
	},
	{
		id: "casas-britalia-uno",
		name: "Casas Britalia Uno",
		realName: "Casas Britalia Uno",
		locality: "Kennedy",
		release: new Date(2021, 11, 15),
		builtArea: 39,
		privateArea: 33.3,
		address: "Britalia Uno, Bogotá",
		price: 0,
		versus: "casas-britalia-uno",
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
		id: "casas-britalia-dos",
		name: "Casas Britalia Dos",
		realName: "Casas Britalia Dos",
		locality: "Kennedy",
		release: new Date(1990, 5, 8),
		builtArea: 39,
		privateArea: 33.3,
		address: "Britalia Dos, Bogotá",
		price: 0,
		versus: "casas-britalia-dos",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "casas-britalia-tres",
		name: "Casas Britalia Tres",
		realName: "Casas Britalia Tres",
		locality: "Kennedy",
		release: new Date(2021, 4, 1),
		builtArea: 39,
		privateArea: 33.3,
		address: "Britalia Tres, Bogotá",
		price: 0,
		versus: "casas-britalia-tres",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "casas-divino-niño",
		name: "Casas Divino Niño",
		realName: "Casas Divino Niño",
		locality: "Bosa",
		release: new Date(2021, 2, 1),
		builtArea: 39,
		privateArea: 33.3,
		address: "Divino Niño, Bogotá",
		price: 0,
		versus: "casas-divino-niño",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://youtube.com/@ConstructoraColombiaOficial",
		},
	},
	{
		id: "casas-san-bernardino",
		name: "Casas San Bernardino",
		realName: "Casas San Bernardino",
		locality: "Bosa",
		release: new Date(2021, 8, 20),
		builtArea: 39,
		privateArea: 33.3,
		address: "San Bernardino, Bogotá",
		price: 0,
		versus: "casas-san-bernardino",
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
		id: "apartamento-molinos-dos",
		name: "Apartamento Molinos Dos",
		realName: "Apartamento Molinos Dos",
		locality: "Rafael Uribe Uribe",
		release: new Date(2021, 3, 4),
		builtArea: 39,
		privateArea: 33.3,
		address: "Molinos Dos, Bogotá",
		price: 0,
		versus: "apartamento-molinos-dos",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "casas-la-paz",
		name: "Casas La Paz",
		realName: "Casas La Paz",
		locality: "Bosa",
		release: new Date(2021, 8, 28),
		builtArea: 39,
		privateArea: 33.3,
		address: "La Paz, Bogotá",
		price: 0,
		versus: "casas-la-paz",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
		rotate: true,
	},
	{
		id: "casas-piamonte",
		name: "Casas Piamonte",
		realName: "Casas Piamonte",
		locality: "Bosa",
		release: new Date(2021, 8, 8),
		builtArea: 39,
		privateArea: 33.3,
		address: "Piamonte, Bogotá",
		price: 0,
		versus: "casas-piamonte",
		bedrooms: "Dos", // encontrado
		toilets: 1,
		socials: {
			youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
		},
	},
	// {
	// 	id: "edificio-11",
	// 	name: "Edificio Once",
	// 	realName: "Edificio Once",
	// 	locality: "Puente Aranda",
	// 	release: new Date(2021, 10, 18),
	// 	builtArea: 39,
	// 	privateArea: 33.3,
	// 	address: "Cl. 34 Sur #51b-45, Bogotá",
	// 	price: 0,
	// 	versus: "edificio-11",
	// 	bedrooms: "Dos", // encontrado
	// 	toilets: 1,
	// 	socials: {
	// 		youtube: "https://www.youtube.com/@ConstructoraColombiaOficial",
	// 	},
	// },
	// {
	// 	id: "edificio-12",
	// 	name: "Edificio Doce",
	// 	realName: "Edificio Doce",
	// 	locality: "Puente Aranda",
	// 	release: new Date(2021, 9, 9),
	// 	builtArea: 39,
	// 	privateArea: 33.3,
	// 	address: "Cl. 34 Sur #51b-45, Bogotá",
	// 	price: 0,
	// 	versus: "edificio-12",
	// 	bedrooms: "Dos", // encontrado
	// 	toilets: 1,
	// 	socials: {
	// 		youtube: "http://youtube.com/@ConstructoraColombiaOficial",
	// 	},
	// },
] as const)
