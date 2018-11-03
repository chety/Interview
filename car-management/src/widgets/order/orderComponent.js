import React from "react";
import "./order.css";

const OrderComponent = () => {
    return <React.Fragment>
        <button className="buttonLink">Purchase</button>
        <button className="buttonLink">My Orders</button>
        <button className="buttonLink">Sell</button>
    </React.Fragment>
}

export default OrderComponent;