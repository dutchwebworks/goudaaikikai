import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
    books: defineCollection({
        loader: file("src/content/lists/books.json"),
        schema: z.object({
            id: z.string(),
            auteur: z.string(),
            titel: z.string(),
            uitgever: z.string(),
            jaar: z.string(),
            taal: z.string(),
            omschrijving: z.string(),
            img: z.string(),
            isbn: z.string(),
            homepage: z.string(),
        }),
    }),
};
