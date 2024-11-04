import { z, defineCollection } from "astro:content";

const workExperience = defineCollection({
	schema: z.object({
		position: z.string(),
		company: z.string(),
		starDate: z.string(),
		endDate: z.string(),
		link: z.string(),
	})
})

export const collections = { workExperience }
