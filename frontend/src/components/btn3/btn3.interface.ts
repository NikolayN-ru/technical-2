import { ReactNode } from "react";

export default interface propBtn3 {
  title: string;
  num: number;
  active?: boolean;
  clickBoardMainMenu: (item: string) => void;
  children?: ReactNode;
}
