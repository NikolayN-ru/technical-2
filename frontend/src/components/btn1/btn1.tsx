import React, { FC } from "react";
import Image from "next/image";
import styles from "./btn1.module.scss";
import { propsBtn1 } from "./btn1.interface";

const Btn1: FC<propsBtn1> = ({ title }) => {
  return (
    <button className={styles.btn1}>
      {title}
      <Image
        className={styles.img}
        alt="qwe"
        src="/inc.svg"
        width="16"
        height="16"
      />
    </button>
  );
};

export default Btn1;
