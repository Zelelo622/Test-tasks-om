import React from "react";
import type { IProductList } from "./types";
import { ProductListWrapper } from "./styles";
import Card from "../Card/Card";

const ProductList = ({ products }: IProductList): React.ReactElement => (
  <ProductListWrapper>
    {products.map((p) => (
      <Card key={p.id} product={p} />
    ))}
  </ProductListWrapper>
);

export default ProductList;
