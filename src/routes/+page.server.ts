import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN, STRAVA_ATHLETE_ID } from '$env/static/private';
import type { PageServerLoad } from './$types';

// === Functions to fetch Strava data
interface StravaStats {
    all_run_totals: {
      count: number;
      distance: number;
    };
    all_ride_totals: {
      count: number;
      distance: number;
    };
  }
  
  async function refreshAccessToken() {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        refresh_token: STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token'
      })
    });
  
    const tokens = await response.json();

    if (!response.ok) {
        console.error('Token refresh failed:', tokens);
        throw new Error(`Token refresh failed: ${tokens.message || JSON.stringify(tokens)}`);
      }

    return tokens.access_token;
  }
  
  async function getAthleteStats(accessToken: string): Promise<StravaStats> {
    const response = await fetch(
      `https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
  
    return await response.json();
  }

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

    // Fetching strava data
    try {
        const accessToken = await refreshAccessToken();
        const stravaStats = await getAthleteStats(accessToken);

        return {
            posts: posts.sort((a,b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
            stravaStats
        };
    }
    catch (error) {
        console.error("Error fetching Strava stats: ", error);
        //sort posts by date 
        return {
            posts: posts.sort((a,b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
            stravaStats: null
        };
    }
};
