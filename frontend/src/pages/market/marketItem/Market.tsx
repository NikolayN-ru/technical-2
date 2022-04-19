import styles from "./marketItem.module.scss";
import Image from "next/image";
import { connect } from "react-redux";
import { addCartItem } from "@/redux/actions";

const MarketItem = ({id, title, price, addCartItem}) => {
  return (
    <div className={styles.marketItem}>
      <Image src="/23.png" width="116" height="196" alt="star" />
      <p>Смартфон</p>
      <span>{title}</span>
      <div className={styles.marketItemDesc}>
        <p>{price} ₽</p>
        <Image src="/starBlack.svg" width="10" height="10" alt="star" />
        <Image src="/messageBlack.svg" width="10" height="10" alt="star" />
      </div>
      <button onClick={()=>addCartItem(id)}>
        Купить <Image src="/cart2.svg" width="16" height="17" alt="cart" />
      </button>
	  <div className={styles.like}>
		  <Image src='/like.svg' width="16" height="16" alt="like"/>
	  </div>
    </div>
  );
};

const mapDispatchToProps = {
  addCartItem,
}
export default connect(null, mapDispatchToProps)(MarketItem);
