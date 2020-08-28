import React from "react";
import "./style.css"

interface ILink {
    href: string;
    title?: string;
    children: any;
}

export function Link({href,title, children}: ILink) {
    return <a className={"link"} href={href} title={title} target={"_blank"} rel="noopener noreferrer">{children}</a>
}