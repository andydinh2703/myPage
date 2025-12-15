export const load = async () => {
    // use import.meta.glob to find all .md files in the source folder
    const postFiles = import.meta.glob('/src/posts/*.md', {eager: true});

    // get all the files into an array
    const posts = Object.entries(postFiles).map(([path, file]) => {
        //extract slug from path
        const slug = path.split('/').pop()?.replace('.md','') ?? '';

        // get meta data from the file
        const metadata = (file as any).metadata;

        return {
            slug,
            ...metadata
        };
    });

    //sort posts by date 
    return {
        posts: posts.sort((a,b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
    };
};