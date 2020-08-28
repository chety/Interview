import React from "react";
import "./avatar.css"

interface IAvatar {
    source: string;
    alt: string;
    title: string;
}
export function Avatar({source,alt,title} : IAvatar) {
    return (
        <img className={"avatar"} src={source} alt={alt} title={title}/>
    )
}