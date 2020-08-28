import React from "react";
import  "./style.css"
interface IFooter {
    count: number;
    message?: string;
}

export function Footer({count, message = "Total Count: "}: IFooter) {
    return (
        <footer className={"table-footer"}>
            <span>{message}<strong>{count}</strong></span>
        </footer>)
}