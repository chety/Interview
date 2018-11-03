import React from "react";
import LogoComponent from "../logo/logoComponent";
import OrderComponent from "../order/orderComponent";

const Header = () => {
    return <React.Fragment>
        <div style={{height:"80px",margin:"8px"}}>
            <span style={{ float: "left", width: "20%",margin:"12px" }}><LogoComponent /></span>
            <span style={{ width: "60%" }}></span>
            <span style={{ float: "right", width: "20%",margin:"12px" }}><OrderComponent /></span>
           
        </div>
    </React.Fragment>
}

export default Header;