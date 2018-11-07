import React from "react";
import "./carSummary.css";
const CarDetails = ({ title, stockNumber, km, type, color }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td> <div id="left" style={{ border: "2px solid gray", backgroundColor: "#EDEDED", height: "100px",width:"80px" }} /> </td>
                    <td> <div id="right">
                        <h3>Chrysler Viper</h3>
                        <p>Stock # 60334 - 174.833 KM - Diesel - Red</p>
                        <a href="#" className="link">View details</a>
                    </div></td>
                </tr>
                <tr>
                    <td> <div id="left" style={{ border: "2px solid gray", backgroundColor: "#EDEDED", height: "100px",width:"80px" }} /> </td>
                    <td> <div id="right">
                        <h3>Chrysler Viper</h3>
                        <p>Stock # 60334 - 174.833 KM - Diesel - Red</p>
                        <a href="#" className="link">View details</a>
                    </div></td>
                </tr>
                <tr>
                    <td> <div id="left" style={{ border: "2px solid gray", backgroundColor: "#EDEDED", height: "100px",width:"80px" }} /> </td>
                    <td> <div id="right">
                        <h3>Chrysler Viper</h3>
                        <p>Stock # 60334 - 174.833 KM - Diesel - Red</p>
                        <a href="#" className="link">View details</a>
                    </div></td>
                </tr>
            </tbody>
        </table>
    );
};

export default CarDetails;