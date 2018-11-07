import React, { PureComponent } from 'react';
import Header from "../widgets/header/header";
import FilterSelector from "../widgets/selector/filterSelector";
import OptionSelector from "../widgets/selector/optionSelector";
import CarListCount from "../widgets/summary/listCount";
import CarSummary from "../widgets/summary/carSummary";
import Api from "../api/index"


class CarHomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  componentDidMount() {
    Api.getAllCars();
  }


  render() {
    const sortValues = [{ id: 0, text: "All" }, { id: 1, text: "Manufacturer" }, { id: 2, text: "Color" }, { id: 3, text: "Model" }];
    return (
      <React.Fragment>
        <Header />
        <hr color="#EDEDED" style={{ width: "99%" }} />
        <span>
          <span style={{ float: "left", width: "30%", border: "1px solid #EDEDED", padding: "24px", marginRight: "18px" }}>
            <FilterSelector />
          </span>
          <span style={{ float: "left", width: "30%" }}>
            <CarListCount total={100} itemsToShow={10} />
          </span>
          <span style={{ float: "right", width: "20%" }}>
            <OptionSelector caption="Sort by" options={sortValues} />
          </span>
        </span>
        <span style={{ float: "left", width: "45%", border: "1px solid #EDEDED" }}>
          <CarSummary />
        </span>
      </React.Fragment>
    );
  }
}

export default CarHomePage;
