import { propsBtn1 } from "./btn1.interface";
import styles from "./btn1.module.scss";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";

const Btn1: FC<propsBtn1> = ({
  title,
  label = false,
  disabled = false,
  more = false,
  cart = false,
}): JSX.Element => {
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
