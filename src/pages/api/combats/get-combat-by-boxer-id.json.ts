import type { APIRoute } from "astro"

import { COMBATS } from "@/consts/combats"

export const prerender = false

export const GET: APIRoute = ({ url }) => {
	const projectId = url.searchParams.get("id")

	const combat = COMBATS.find((combat) => combat.projects.includes(projectId as string))

	if (!combat) {
		return new Response(JSON.stringify("Not found"), { status: 404 })
	}
	return new Response(JSON.stringify(combat), {
		headers: {
			"content-type": "application/json",
		},
	})
}
