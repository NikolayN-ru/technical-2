import styles from "./cart.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Cart: FC = () => {
  return (
    <div className={styles.cart}>
      <Link href="/cart">
        <a>
          <Image src="/cart2.svg" width="16px" height="29px" alt="logo" />
        </a>
      </Link>
    </div>
  );
};
export default Cart;
