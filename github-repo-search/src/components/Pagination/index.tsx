import React from "react";
import "./style.css"
import {IPageInfo} from "../../model/dataStore";

interface IPagination {
    pageInfo: IPageInfo;
    onPageChanged: (amount: number) => void;
}

export function Pagination({pageInfo, onPageChanged}: IPagination) {
    const {activePage,lastPage} = pageInfo
    function pageChanged(amount: number) {
        return () => onPageChanged(amount);
    }

    return (
        <div className="pagination">
            <button title={"Previous"} onClick={pageChanged(-1)} disabled={activePage === 1}>❮</button>
            <button title={"Next"} onClick={pageChanged(1)} disabled={activePage === lastPage}>❯</button>
        </div>)
}