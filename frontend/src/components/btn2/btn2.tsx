import React, { FC } from "react";
import Image from "next/image";
import styles from "./btn2.module.scss";
import { propsBtn2 } from "./btn2.interface";
import cn from "classnames";

const Btn2: FC<propsBtn2> = ({}: propsBtn2) => {
  return (
    <div className={styles.btn2}>
      <Image src="/arrow1.svg" width="10" height="18" />
    </div>
  );
};

export default Btn2;
