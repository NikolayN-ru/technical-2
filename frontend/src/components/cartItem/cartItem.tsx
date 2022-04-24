import { CartItemProps } from "./cartItem.interface";
import styles from "./cartItem.module.scss";
import { delCartItem } from "@/redux/actions";
import { marketDataItemProps } from "mockData/marketData/marketData.interface";
import Image from "next/image";
import { FC } from "react";
import { useDispatch, useStore } from "react-redux";

const CartItem: FC<CartItemProps> = ({ id, title, price, img }) => {
  const store = useStore();
  const dispatch = useDispatch();

  const getItem = (id: number) => {
    const index = store
      .getState()
      .marketData.data.find((item: marketDataItemProps) => item.id == id);
    return delCartItem(index);
  };

  return (
    <div className={styles.itemsDescItem}>
      {/* <Image src="/phone22.png" width="77" height="80" alt="iphone" /> */}
      <Image src={img} width="77" height="80" alt="iphone" />
      <span>{title}</span>
      <span>{price} ₽</span>
      <button onClick={() => dispatch(getItem(id))}>
        <Image src="/off.svg" width="14" height="17" alt="cart" />
      </button>
    </div>
  );
};

export default CartItem;
