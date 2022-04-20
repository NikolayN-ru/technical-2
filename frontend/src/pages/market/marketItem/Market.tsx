import styles from "./marketItem.module.scss";
import { addCartItem, favoritesAdd } from "@/redux/actions";
import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";

const MarketItem = (props: { favoritesAdd }) => {
  const { id, title, price, img, addCartItem, favoritesAdd } = props;

  return (
    <div className={styles.marketItem}>
      <Link href={`/${Number(id)}`}>
        <a>
          <Image src={img} width="116" height="186" alt="star" />
        </a>
      </Link>
      <p>Смартфон</p>
      <span>{title}</span>
      <div className={styles.marketItemDesc}>
        <p>{price} ₽</p>
        <Image src="/starBlack.svg" width="10" height="10" alt="star" />
        <Image src="/messageBlack.svg" width="10" height="10" alt="star" />
      </div>
      <button onClick={() => addCartItem(id)}>
        Купить <Image src="/cart2.svg" width="16" height="17" alt="cart" />
      </button>
      <div className={styles.like} onClick={() => favoritesAdd(props)}>
        <Image src="/likeF.svg" width="19" height="19" alt="like" />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addCartItem,
  favoritesAdd,
};
export default connect(null, mapDispatchToProps)(MarketItem);
