import styles from "./cart.module.scss";
import { bonusCartItem, breadCamps, delCartItem } from "@/redux/actions";
import Btn1 from "@/src/components/btn1";
import CartItem from "@/src/components/cartItem";
import InputFormUser from "@/src/components/inputFormUser/inputFormUser";
import { FC, useEffect, useState } from "react";
import { connect, useStore } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const CartPage: FC = ({ breadCamps }:any): JSX.Element => {
  const [stateValue, setStateValue] = useState<string>('');
  const items = useSelector(({ cartItems }:any) => cartItems.cart);
  const cartData = useSelector(({ cartItems }:any) => cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    breadCamps(["корзина"]);
  }, []);

  const valueInput = (value: any) => {
    setStateValue(value)
  }

  return (
    <div className={styles.cart}>
      <h1>Корзина</h1>
      <div className={styles.cartItems}>
        <div className={styles.itemsDesc}>
          {items.length ? (
            items.map((item:any, id: any) => <CartItem key={id} {...item}/>
            
            )
            ) : (
              <p>корзина пустa </p>
              )}
        </div>
        <div className={styles.promo}>
          <InputFormUser hint="Промокод" valueInput={valueInput} placeholder="секретный промокод: bonus"/>
          <div onClick={() => dispatch(bonusCartItem(stateValue))}>
          <Btn1 title="Применить" more={true} />
          </div>
          <div className={styles.sale}>
            <span>Скидки и бонусы</span>
            <span>- {cartData.sale} ₽</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.coast}>
            <span>Всего</span>
            <span>{cartData.total} ₽</span>
          </div>
        </div>
              {items.length ? <Btn1 title="Перейти к оформлению" more={true} /> : null}
      </div>
    </div>
  );
};

// const mapStateToProps = ({ cartItems }) => {
//   return {
//     cartItems: cartItems,
//   };
// };

const mapDispatchToProps = {
  breadCamps,
};

export default connect(null, mapDispatchToProps)(CartPage);
