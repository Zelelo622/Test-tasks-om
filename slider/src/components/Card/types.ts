export interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
}

export interface ICardProps {
  product: IProduct;
}
