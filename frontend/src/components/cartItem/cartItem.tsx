import styles from "./cartItem.module.scss";
import { delCartItem } from "@/redux/actions";
import Image from "next/image";
import { connect } from "react-redux";

const CartItem = ({ id, title, price, img, delCartItem }) => {
  return (
    <div className={styles.itemsDescItem}>
      {/* <Image src="/phone22.png" width="77" height="80" alt="iphone" /> */}
      <Image src={img} width="77" height="80" alt="iphone" />
      <span>{title}</span>
      <span>{price} ₽</span>
      <button onClick={() => delCartItem(id)}>
        <Image src="/off.svg" width="14" height="17" alt="cart" />
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  delCartItem,
};

export default connect(null, mapDispatchToProps)(CartItem);
