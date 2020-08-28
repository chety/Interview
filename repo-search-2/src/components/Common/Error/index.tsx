import React from 'react'
import "./style.css"
import {Icon} from "../Icon"

interface ICustomError {
    header?: string;
    message: string;
}

export function CustomError({header = "Oops something went wrong.  Click For Details", message}: ICustomError) {
    return (
        <div className="error-container">
            <span className="error-header">{header}</span>
            <Icon symbol="🙄" label="rolling-eyes"/>
            <details className="error-detail">{message}</details>
        </div>
    )
}
