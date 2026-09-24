import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Long-form text only. Each file exists once per language with the same name:
 * src/content/<collection>/en/<slug>.md and src/content/<collection>/bn/<slug>.md.
 * Do not set `slug:` in frontmatter; the file path is the id (e.g. "en/guest-house").
 */
const prose = (dir: string) =>
  defineCollection({
    loader: glob({ base: `./src/content/${dir}`, pattern: '{en,bn}/[^_]*.md' }),
    schema: z.object({ title: z.string().optional() }),
  });

export const collections = {
  pages: prose('pages'),
  projects: prose('projects'),
  people: prose('people'),
};
