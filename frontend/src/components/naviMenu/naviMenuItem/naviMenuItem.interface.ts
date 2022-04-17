import { ReactNode } from "react";

export interface naviMenuItemProps {
  title: string;
  active: boolean;
  link: string;
  image: string;
  width: number;
  height: number;
  clickNaviMenuItem: (title: string) => void;
  children?: ReactNode;
}
