import React from 'react';

const CarListCount = ({ itemsToShow, total }) => {
    return <React.Fragment>
        <h3 className="widget">Available Cars</h3>
        <p>Showing {itemsToShow} of {total} results</p>
    </React.Fragment>
};
export default CarListCount;