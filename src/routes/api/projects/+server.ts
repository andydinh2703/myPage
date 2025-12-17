import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getProjects } from '$lib/server/projects';

export const GET: RequestHandler = async () => {
  const projects = await getProjects();
  return json({ projects });
};