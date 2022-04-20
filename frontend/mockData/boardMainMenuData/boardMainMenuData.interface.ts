interface boardMainMenuItemProps {
  id: number;
  title: string;
  num: number;
}

export interface boardMainMenuStateProps {
  items: boardMainMenuItemProps[];
  active: string;
}
