interface marketDataItemProps {
  id: number;
  title: string;
  color: string;
  price: number;
  img: string;
}

export interface marketDataProps {
  data: marketDataItemProps[];
}
