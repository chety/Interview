import React, { PureComponent } from 'react';
import Header from "../widgets/header/header";
import FilterSelector from "../widgets/selector/filterSelector";
import OptionSelector from "../widgets/selector/optionSelector";

class CarHomePage extends PureComponent {
  render() {
    const sortValues = [{ id: 0, text: "All" }, { id: 1, text: "Manufacturer" }, { id: 2, text: "Color" }, { id: 3, text: "Model" }];
    return (
      <React.Fragment>
        <Header />
        <hr color="#EDEDED" style={{ width: "99%" }} />
        <span style={{ float: "left", width: "25%", border: "1px solid #EDEDED", padding: "24px" }}>
          <FilterSelector />
        </span>
        <span style={{ float: "right", width: "15%" }}>
          <OptionSelector caption="Sort by" options={sortValues} />
        </span>
      </React.Fragment>
    );
  }
}

export default CarHomePage;
