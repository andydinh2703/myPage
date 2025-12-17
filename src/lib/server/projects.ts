import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

// declare data file
const DATA_FILE = join(process.cwd(), 'src/data/projects.json');

export interface ProjectMeta {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    projectUrl: string;
    date:string;
}

// get project function
export async function getProjects(): Promise<ProjectMeta[]> {
    const data = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data).projects;
}

