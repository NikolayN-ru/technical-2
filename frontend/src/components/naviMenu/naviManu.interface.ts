import { ReactNode } from "react";

export interface naviMenuItemProps {
  id: number;
  title: string;
  active: boolean;
  link: string;
  image: string;
  children?: ReactNode;
  width: number;
  height: number;
}

export interface naviMenuProps {
  menu?: naviMenuItemProps[];
}
