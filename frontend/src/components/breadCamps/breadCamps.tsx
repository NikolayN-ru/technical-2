import { propsBreadCamps } from "./breadCamps.interface";
import styles from "./breadCamps.module.scss";
import { FC } from "react";

const BreadCamps: FC<propsBreadCamps> = ({
  ...links
}: propsBreadCamps): JSX.Element => {
  const camps: string[] = [];
  for (let key in links) {
    camps.push(links[key] + " > ");
  }
  camps[camps.length - 1] = camps[camps.length - 1].substring(
    0,
    camps[camps.length - 1].length - 3
  );
  return (
    <div className={styles.breadCamps}>
      {camps.map((item: string) => (
        <span className={styles.breadCampsItem} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default BreadCamps;
