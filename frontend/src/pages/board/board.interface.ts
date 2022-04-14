export interface boardItemProps {
  active: boolean;
  city: string;
  day: number;
  id: number;
  like: number;
  price: number;
  title: string;
  type: "active" | "buy" | "noActive"
}

export interface boardProps {
	items: boardItemProps[]
}