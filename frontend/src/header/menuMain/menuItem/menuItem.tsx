import { propsMenuItem } from "./menuItem.inteface";
import styles from "./menuItem.module.scss";
import Link from "next/link";
import { FC } from "react";

const MenuItem: FC<propsMenuItem> = ({ title, linkItem }): JSX.Element => {
  return (
    <Link href={linkItem} passHref>
      <div className={styles.item}>{title}</div>
    </Link>
  );
};

export default MenuItem;
