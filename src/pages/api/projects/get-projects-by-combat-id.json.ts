import type { APIRoute } from "astro"

import { COMBATS } from "@/consts/combats"
import { PROJECTS } from "@/consts/projects"

export const prerender = false

export const GET: APIRoute = ({ url }) => {
	const combatId = url.searchParams.get("id")

	const combat = COMBATS.find((combat) => combat.id === (combatId as string))

	if (!combat) {
		return new Response(JSON.stringify("Not found"), { status: 404 })
	}

	const projects = PROJECTS.filter((project) => combat.projects.includes(project.id))

	if (projects.length === 0) {
		return new Response(JSON.stringify("Not found"), { status: 404 })
	}

	return new Response(JSON.stringify(projects), {
		headers: {
			"content-type": "application/json",
		},
	})
}
