import React from "react";
import {IPageInfo, IRepositoryInfo} from "../../model/dataStore";
import {Avatar} from "../Common/Avatar";
import {Link} from "../Link"
import {Icon} from "../Common/Icon";
import {EmptyRecord} from "../Common/EmptyRecord";
import {Pagination} from "../Pagination";
import {Footer} from "../Footer";
import "./style.css"

interface IRepoTable {
    data : IRepositoryInfo[];
    pageChanged: (amount:number) => void;
    pageInfo: IPageInfo
}

export function RepoTable({data,pageChanged,pageInfo} : IRepoTable) {

    function renderRepo(name: string, link: string): any {
        return <Link href={link} title={"Click for Repository Info"}>{name}</Link>
    }

    function renderOwner(name: string, url: string, avatarUrl: string) {
        return <Link href={url}>{<Avatar source={avatarUrl} alt={`${name}_avatar`}
                                         title={"Click For Owner Info"}/>}</Link>
    }

    function renderStar() {
        return <Icon symbol={"⭐"} label={"stars"}/>
    }

    function renderTableHeader() {
        return (
            <thead>
            <tr>
                <th>Repository Name</th>
                <th>Languages</th>
                <th>Owner</th>
                <th>Stars</th>
            </tr>
            </thead>)
    }

    function renderTableBody(data: any[]) {
        return (
            <tbody>
            {
                data.map((data: IRepositoryInfo) => {
                    const {id, repoName, repoUrl, languages, owner, ownerUrl, avatarUrl, stars} = data;
                    return (<tr key={id}>
                        <td>{renderRepo(repoName, repoUrl)}</td>
                        <td>{languages ? languages.join() : ""}</td>
                        <td>{renderOwner(owner, ownerUrl, avatarUrl)}</td>
                        <td>{renderStar()}{stars}</td>
                    </tr>)
                })
            }
            </tbody>);
    }

    function render(data: IRepositoryInfo[]) {
        if (!data) {
            return null;
        }
        if (data.length === 0) {
            return <EmptyRecord/>
        }
        return (
            <div className={"inner-container"}>
                <table>
                    {renderTableHeader()}
                    {renderTableBody(data)}
                </table>
                <Pagination onPageChanged={pageChanged} pageInfo={pageInfo}/>
                <Footer count={pageInfo.totalRepoCount || 0} />
            </div>
        )
    }


    return (
        <div className={"table-container"}>
            {render(data)}
        </div>)
}