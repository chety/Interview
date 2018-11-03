import React from "react";
import OptionSelector from "./optionSelector";
import "./buttonStyle.css";

const FilterSelector = () => {
    const colors = [{ id: 0, text: "All car colors" }, { id: 1, text: "Green" }, { id: 2, text: "Red" }];
    const manifacturers = [{ id: 0, text: "All manufacturers" }, { id: 1, text: "Ford" }, { id: 2, text: "Mercedes" }];
    return (<React.Fragment>
        <OptionSelector caption="Color" options={colors} />
        <OptionSelector caption="Manufacturer" options={manifacturers} />
        <button className="filterButton">Filter</button>
    </React.Fragment>);
}

export default FilterSelector;