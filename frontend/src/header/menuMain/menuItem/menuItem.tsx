import { propsMenuItem } from "./menuItem.inteface";
import styles from "./menuItem.module.scss";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const MenuItem: FC<propsMenuItem> = ({ title, linkItem }): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <Link href={linkItem} passHref>
      <div
        className={cn(styles.item, {
          [styles.active]: asPath == linkItem,
        })}
      >
        {title}
      </div>
    </Link>
  );
};

export default MenuItem;
