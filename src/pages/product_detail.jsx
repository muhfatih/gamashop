import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_SINGLE_PRODUCT } from "src/api.documentation";
import ProductDescription from "src/components/product/product_detail/ProductDescription";
import ProductImages from "src/components/product/product_detail/ProductImages";
import ProductOverview from "src/components/product/product_detail/ProductOverview";
import MainLayout from "src/components/_layouts/MainLayout";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    console.log(`product id = ${id}`);
    (async () => {
      const data = await GET_SINGLE_PRODUCT({product_id: id}).then((res) => {
        return res.data.body;
      });
      setProductDetail(data);
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
