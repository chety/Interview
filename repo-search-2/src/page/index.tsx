import React, {useState} from 'react'
import {Header} from "../components/Common/Header";
import {Icon} from "../components/Common/Icon"
import {Search} from "../components/Search";
import {getRepositoriesByRepoName} from "../api"
import {Loading} from "../components/Common/Loading";
import {CustomError} from "../components/Common/Error";
import {IFetchStatus, IPageInfo, IRepositoryInfo} from "../model/dataStore";
import {RepoTable} from "../components/Table";
import "./style.css"


export function RepoSearch() {
    const [status, setStatus] = useState<IFetchStatus>({loading: false, error: false, message: ""});
    const [repo, setRepo] = useState<any>(null);
    const [pageInfo, setPageInfo] = useState<IPageInfo>({activePage: -1, lastPage: -1,totalRepoCount: 0})
    const [repoName, setRepoName] = useState<string>("")

    async function onHandleSearch(repoName: string, activePage: number) {
        setStatus({...status, loading: true});
        setRepoName(repoName)
        try {
            const [data, totalPage,totalRepoCount] = await getRepositoriesByRepoName({repoName, activePage});
            if (pageInfo.lastPage === -1) {
                setPageInfo({activePage: 1, lastPage: totalPage,totalRepoCount})
            }
            setRepo(data.items)
        } catch (err) {
            setStatus({...status, error: true, message: err});
        } finally {
            setStatus({...status, loading: false})
        }
    }



    function onHandlePageChanged(amount: number): void {
        let {activePage,lastPage} = pageInfo;
        activePage  = pageInfo.activePage + amount;
        setPageInfo({...pageInfo, activePage})
        onHandleSearch(repoName,activePage)
    }

    function render() {
        if (status.loading) {
            return <Loading/>
        }
        if (status.error) {
            return <CustomError message={status.message}/>
        }
        // @ts-ignore
        const dataToRender: IRepositoryInfo[] = repo == null ? null : repo.map(({id, name, html_url, stargazers_count, owner: {login, html_url: ownerUrl, avatar_url}, languages}) => ({
            id,
            repoName: name,
            repoUrl: html_url,
            languages,
            owner: login,
            ownerUrl,
            avatarUrl: avatar_url,
            stars: stargazers_count
        }))
        return <RepoTable data={dataToRender} pageChanged={onHandlePageChanged} pageInfo={pageInfo}/>
    }


    return (
        <>
            <div className="common header">
                <Icon symbol="✨ "/>
                <Header/>
                <Icon symbol="✨ "/>
            </div>
            <div className={"common repo-container"}>
                <Search searchStarted={(repoName:string) => onHandleSearch(repoName, pageInfo.activePage)}/>
                {render()}
            </div>
        </>
    )
}
