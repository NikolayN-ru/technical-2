import { ReactNode } from "react";

export interface menuItemsItemProps {
  id: number;
  title: string;
  linkItem: string;
}

export interface menuItemsProps {
  menuItems: menuItemsItemProps[];
  children?: ReactNode;
}
