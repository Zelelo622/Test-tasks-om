import type React from "react";
import type { ICardProps } from "./types";
import { CardWrapper, ImageWrapper, Title } from "./styles";

const Card = ({ product }: ICardProps): React.ReactElement => (
  <CardWrapper>
    <ImageWrapper>
      <img src={product.imageUrl} alt={product.title} />
    </ImageWrapper>
    <div>
      <Title>{product.title}</Title>
    </div>
  </CardWrapper>
);

export default Card;
