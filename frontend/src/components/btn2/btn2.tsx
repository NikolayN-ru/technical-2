import { propsBtn2 } from "./btn2.interface";
import styles from "./btn2.module.scss";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";

const Btn2: FC<propsBtn2> = (): JSX.Element => {
  return (
    <div className={styles.btn2}>
      <Image src="/arrow1.svg" width="10" height="18" />
    </div>
  );
};

export default Btn2;
