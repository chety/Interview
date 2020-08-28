export interface IRepositoryInfo {
    id: number,
    repoName: string;
    repoUrl: string;
    languages: string[];
    owner: string;
    ownerUrl: string;
    avatarUrl: string;
    stars: number;
}

export interface IFetchStatus {
    loading: boolean;
    error: boolean;
    message: string;
}

export interface IPageInfo {
    activePage: number;
    lastPage: number;
    totalRepoCount?: number;
}