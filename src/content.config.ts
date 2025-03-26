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
    guestbook: defineCollection({
        loader: file("src/content/lists/guestbook.json"),
        schema: z.object({
            id: z.string(),
            name: z.string(),
            message: z.string(),
            date: z.string(),
        }),
    }),
    links: defineCollection({
        loader: file("src/content/lists/links.json"),
        schema: z.object({
            id: z.string(),
            name: z.string(),
            beschrijving: z.string(),
            url: z.string(),
            date: z.string(),
        }),
    }),
    nav: defineCollection({
        loader: file("src/content/lists/nav.json"),
        schema: z.object({
            url: z.string(),
            title: z.string(),
            label: z.string(),
        }),
    }),
    news: defineCollection({
        loader: file("src/content/lists/news.json"),
        schema: z.object({
            id: z.string(),
            header: z.string(),
            message: z.string(),
            date_start: z.string(),
            date_end: z.string(),
        }),
    }),
    photoAlbums: defineCollection({
        loader: file("src/content/lists/photo-albums.json"),
        schema: z.object({
            id: z.string(),
            header: z.string(),
            tekst: z.string(),
            date: z.string(),
        }),
    }),
    stages: defineCollection({
        loader: file("src/content/lists/stages.json"),
        schema: z.object({
            id: z.string(),
            docent: z.string(),
            locatie: z.string(),
            tijd: z.string(),
            date: z.string(),
            organisatie: z.string(),
            bijzonderheden: z.string(),
        }),
    }),
    youtubeVideos: defineCollection({
        loader: file("src/content/lists/youtube-videos.json"),
        schema: z.object({
            id: z.string(),
            title: z.string(),
            url: z.string(),
        }),
    }),
};
