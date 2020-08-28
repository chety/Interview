import React, {useState} from "react";
import "./style.css"
interface ISearchProps {
    searchStarted: (val: string) => void
}

export function Search({searchStarted}: ISearchProps) {
    const [repoName, setRepoName] = useState<string>("");

    function repoNameChanged(e: any) {
        setRepoName(e.target.value)
    }

    function search() {
        if (!repoName){
            return;
        }
        searchStarted(repoName);
    }

    return (
        <div className={"search-container"}>
                <input className={"repo-name"} type={"text"} value={repoName} placeholder={"Enter Repo Name To Search..."}
                       onChange={repoNameChanged} required={true}/>
                <button className={"repo-search"} onClick={search}>Search</button>
        </div>
    )
}