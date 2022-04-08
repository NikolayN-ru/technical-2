import { propsItemMenuDown } from "./itemMenuDown.interface";
import styles from "./itemMenuDown.module.scss";
import Image from "next/image";
import { FC } from "react";

const ItemMenuDown: FC<propsItemMenuDown> = ({ title, icon }) => {
  return (
    <div className={styles.itemMenuDown}>
      <Image src={icon} width="14px" height="19px" alt="title" />
      <span>{title}</span>
    </div>
  );
};

export default ItemMenuDown;
