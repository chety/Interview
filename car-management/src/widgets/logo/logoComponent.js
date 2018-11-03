import React from "react";

const LogoComponent = () => {
    const logo = require("../../assets/logo.png");
    return <React.Fragment>
        <img src={logo} alt="Auto1" />
    </React.Fragment>
}

export default LogoComponent;