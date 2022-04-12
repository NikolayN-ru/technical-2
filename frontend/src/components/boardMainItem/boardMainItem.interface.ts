interface itemProps {
  id: number;
  active: boolean;
  type: "active" | "by" | "noActive";
  title: string;
  price: number;
  city: string;
  day: number;
  like: number;
}

export interface BoardMainItemProps {
  stoped?: boolean;
  item: itemProps;
}
