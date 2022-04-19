import UserLayout from "../userLayout";
import styles from "./userLike.module.scss";
import UserLikeItem from "./userLikeItem";
import { useSelector } from "react-redux";
import Link from 'next/link';

const UserLike = () => {
  const state = useSelector(({ favoritesData }) => favoritesData.favor);
  console.log(state);
  return (
    <UserLayout>
      <div className={styles.block}>
        {state && state.map((item, id) => <UserLikeItem key={id} {...item} />)}
        {state.length ? null: <p>товаров нет в избранном <Link href='/market'><a>добавьте </a></Link>товары</p>}
      </div>
    </UserLayout>
  );
};
export default UserLike;
