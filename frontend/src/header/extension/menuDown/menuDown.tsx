import ItemMenuDown from "./itemMenuDown";
import styles from "./menuDown.module.scss";
import Image from "next/image";
import { FC } from "react";

const items = [
  { id: 1, title: "ОБъявления", icon: "/list.svg" },
  { id: 2, title: "Магазины", icon: "/magazine.svg" },
  { id: 3, title: "Благотворительность", icon: "/handle.svg" },
];

const menuDown: FC = () => {
  return (
    <div className={styles.menuDown}>
      <Image src="/burger.svg" width="14px" height="14px" alt="burger" />
      {items.map(({ id, title, icon }) => (
        <ItemMenuDown key={id} title={title} icon={icon} />
      ))}
    </div>
  );
};

export default menuDown;
