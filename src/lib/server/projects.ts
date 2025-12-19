export interface ProjectMeta {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    projectUrl: string;
    date: string;
}

// get project function - uses import so it works on Vercel
export async function getProjects(): Promise<ProjectMeta[]> {
    const data = await import('$lib/../data/projects.json');
    return data.projects;
}

