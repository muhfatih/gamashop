import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "src/components/product/product_detail/ProductDescription";
import ProductImages from "src/components/product/product_detail/ProductImages";
import ProductOverview from "src/components/product/product_detail/ProductOverview";
import MainLayout from "src/components/_layouts/MainLayout";
import axios from "axios";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState();

  const  {id} =useParams();

  useEffect(() => {
    (async () => {

      const data = await axios
      .get(`https://gamaxios.herokuapp.com/product/${id}`)
      .then(function (response) {
        setProductDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log("im here");
      });
    })();
  }, []);

  return (
    <MainLayout>
      <div className="pb-40 mx-40 my-10 px-7 pt-7">
        {productDetail != null && (
          <>
            <div className="flex">
              <ProductImages images={productDetail.images} />
              <spacer className="mr-16" />
              <ProductOverview
                productDetail = {productDetail}
                name={productDetail.name}
                price={productDetail.price}
                amount_stock={productDetail.amount_stock}
              />
            </div>

            <div className="mb-14" />
            <ProductDescription description={productDetail.description} />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
