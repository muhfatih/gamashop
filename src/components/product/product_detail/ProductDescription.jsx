import React from 'react'

const ProductDescription = (props) => {
    return (
        <div>
            <h2 className="mb-6 text-3xl font-semibold text-gray-300">Deskripsi Produk</h2>
            <p>{props.description}</p>
        </div>
    );
}


export default ProductDescription;
