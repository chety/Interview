import React from "react";

export function EmptyRecord({message = "No Data Found..."}: {message?:string}) {
    return <div>{message}</div>
}