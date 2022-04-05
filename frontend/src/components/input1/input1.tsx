import React from "react";
import { propsInput1 } from "./input1.interface";
import styles from "./input1.module.scss";
import Image from "next/image";

const Input1 = ({}: propsInput1) => {
  return (
    <div className={styles.input1}>
      <Image
        className={styles.img1}
        alt="plus"
        src="/search.svg"
        width="16"
        height="16"
      />
      <input type="text" placeholder="Я хочу купить" />
      <button>Найти</button>
    </div>
  );
};

export default Input1;
