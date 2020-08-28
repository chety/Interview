import React from "react";
import "./style.css"

export function EmptyRecord({message = "No Data Found..."}: { message?: string }) {
    return <div className={"nodata-container"}>{message}</div>
}