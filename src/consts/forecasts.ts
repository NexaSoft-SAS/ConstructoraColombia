export interface Forecast {
	combatId: string
	forecastData: ForecastData[]
}

export interface ForecastData {
	projectId: string
	forecast: number
	predictionsCount: number
}

export const FORECASTS: Forecast[] = [
	{
		combatId: "1",
		forecastData: [
			{
				projectId: "edificio-genesis",
				forecast: 0.3,
				predictionsCount: 6,
			},
			{
				projectId: "edificio-genesis",
				forecast: 0.7,
				predictionsCount: 14,
			},
		],
	},
]
