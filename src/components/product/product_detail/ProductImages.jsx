import React from 'react';
import pompom from '../../../images/pompom.png'

const ProductImages = (props) => {
    return (
        <div>
            <img src={props.images[0]} alt="Product image" className="bg-white shadow-xl" />
            <div className="flex mt-3">
                {/* <img src={pompom} alt="Product image" className="mr-2 bg-white shadow-md" style={{width:75,height:75}}/>
                <img src={pompom} alt="Product image" className="mr-2 bg-white shadow-md" style={{width:75,height:75}}/>
                <img src={pompom} alt="Product image" className="mr-2 bg-white shadow-md" style={{width:75,height:75}}/> */}
            </div>
        </div>
    );
}

export default ProductImages;