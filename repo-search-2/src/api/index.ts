import axios from "axios"
import exp from "constants";

interface ISearchParameter {
    repoName: string;
    sort?: string;
    order?: string;
    activePage?: number;
    per_page?: number;
}

const baseUrl: string = "https://api.github.com/search/repositories?q=";

export const parseResponse = (response:any) : RegExpMatchArray | null => {
    const linkHeader: string | null = response.headers.get('link')
    return linkHeader ? linkHeader.match(/\d+(?=>;\s+rel="last")/g) : null;
}

export  const getTotalPageCount = (response:any) : number => {
    const match = parseResponse(response);
    return  match ? +match[0] : 0;
}

/*{
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
}*/
export const getRepositoryLanguges = async (repos: any[]) : Promise<any> => {
    const languageUrlRequests: Promise<any>[] = repos.map((item: any) => axios(item.languages_url, {
        headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    }))
    const languages = await Promise.all(languageUrlRequests);
    return  languages;
}

export const getRepositoriesByRepoName = async ({repoName, sort = "stars", order = "desc", activePage = 1, per_page = 25}: ISearchParameter): Promise<any> => {
    const response = await fetch(`${baseUrl}${repoName}+in:name&type=Repositories&sort=${sort}&order=${order}&per_page=${per_page}&page=${activePage}`);

    const totalPageCount: number = getTotalPageCount(response);
    const data = await response.json();
    const totalRepoCount = data.total_count;
    const languages = await getRepositoryLanguges(data.items);
    data.items.forEach((item: any, idx: number) => {
        item.languages = Object.keys(languages[idx].data);
    })
    return [data, totalPageCount, totalRepoCount]
}

