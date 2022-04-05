import React, { FC } from "react";
import Image from "next/image";
import styles from "./btn1.module.scss";
import { propsBtn1 } from "./btn1.interface";
import cn from "classnames";

const Btn1: FC<propsBtn1> = ({
  title,
  label = false,
  disabled = false,
  more = false,
  cart = false,
}: propsBtn1) => {
  return (
    <button
      className={cn(styles.btn1, {
        [styles.dop]: label == true,
        [styles.disabled]: disabled == true,
        [styles.more]: more == true,
      })}
    >
      <span>{title}</span>
      {label && (
        <div
          className={cn(styles.img, {
            [styles.imgTrue]: label == true,
          })}
        >
          <Image alt="plus" src="/inc.svg" width="16" height="16" />
        </div>
      )}
      {cart && <Image alt="cart" src="/cart.svg" width="16" height="16" />}
    </button>
  );
};

export default Btn1;
