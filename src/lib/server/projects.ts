import projectsData from '../../data/projects.json';

export interface ProjectMeta {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    projectUrl: string;
    date: string;
}

// Get projects from JSON 
export async function getProjects(): Promise<ProjectMeta[]> {
    return projectsData.projects;
}

