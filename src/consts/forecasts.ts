export interface Forecast {
	combatId: string
	forecastData: ForecastData[]
}

export interface ForecastData {
	boxerId: string
	forecast: number
	predictionsCount: number
}

export const FORECASTS: Forecast[] = [
	{
		combatId: "1",
		forecastData: [
			{
				boxerId: "edificio-genesis",
				forecast: 0.3,
				predictionsCount: 30,
			},
			{
				boxerId: "edificio-genesis",
				forecast: 0.7,
				predictionsCount: 70,
			},
		],
	},
	{
		combatId: "2",
		forecastData: [
			{
				boxerId: "edificio-gloria",
				forecast: 0.8,
				predictionsCount: 80,
			},
			{
				boxerId: "edificio-gloria",
				forecast: 0.2,
				predictionsCount: 20,
			},
		],
	},
	{
		combatId: "3",
		forecastData: [
			{
				boxerId: "casas-britalia-uno",
				forecast: 0.9,
				predictionsCount: 90,
			},
			{
				boxerId: "casas-britalia-uno",
				forecast: 0.1,
				predictionsCount: 10,
			},
		],
	},
	{
		combatId: "4",
		forecastData: [
			{
				boxerId: "casas-britalia-dos",
				forecast: 0.6,
				predictionsCount: 60,
			},
			{
				boxerId: "casas-britalia-dos",
				forecast: 0.4,
				predictionsCount: 40,
			},
		],
	},
]
