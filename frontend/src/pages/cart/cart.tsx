import styles from "./cart.module.scss";
import { delCartItem } from "@/redux/actions";
import { FC } from "react";
import { connect } from "react-redux";

import {useSelector, useDispatch} from 'react-redux'


const CartPage: FC = ({ cartItems, delCartItem }): JSX.Element => {
  const store2 = useSelector(store=>store)
  const dispatch = useDispatch()
  console.log(store2, 'useSelectoruseSelectoruseSelector')
  return (
    <div className={styles.cart}>
      cart-pages <br />
      {console.log(cartItems.cart, "cartItemems.cart")}
      {cartItems.cart.length ? " yes " : " товаров нет"}
      {cartItems.cart.length &&
        cartItems.cart.map(({ id, title, price }, key) => (
          <li key={key}>
            {id}-{title}-{price}
            <button onClick={() => delCartItem(id)}>del</button>
            <button onClick={()=>dispatch(delCartItem(id))}>DELETE</button>
          </li>
        ))}
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = {
  delCartItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
