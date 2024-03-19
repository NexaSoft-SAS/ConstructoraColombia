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
				boxerId: "edificio-1",
				forecast: 0.3,
				predictionsCount: 30,
			},
			{
				boxerId: "edificio-1",
				forecast: 0.7,
				predictionsCount: 70,
			},
		],
	},
	{
		combatId: "2",
		forecastData: [
			{
				boxerId: "edificio-2",
				forecast: 0.8,
				predictionsCount: 80,
			},
			{
				boxerId: "edificio-2",
				forecast: 0.2,
				predictionsCount: 20,
			},
		],
	},
	{
		combatId: "3",
		forecastData: [
			{
				boxerId: "edificio-3",
				forecast: 0.9,
				predictionsCount: 90,
			},
			{
				boxerId: "edificio-3",
				forecast: 0.1,
				predictionsCount: 10,
			},
		],
	},
	{
		combatId: "4",
		forecastData: [
			{
				boxerId: "edificio-4",
				forecast: 0.6,
				predictionsCount: 60,
			},
			{
				boxerId: "edificio-4",
				forecast: 0.4,
				predictionsCount: 40,
			},
		],
	},
]
