import React from "react";
import "./style.css"

interface IIcon {
    label?: string;
    symbol: any;
}

export function Icon({label, symbol}: IIcon) {
    return (
        <span className="emoji" role="img" aria-label={label || ""} aria-hidden={label ? "false" : "true"}>
      {symbol}
    </span>
    );
}
