import UserLayout from "../userLayout";
import styles from "./userLike.module.scss";
import UserLikeItem from "./userLikeItem";
import { useSelector } from "react-redux";
import Link from 'next/link';
import { FC } from "react";

const UserLike: FC = () => {
  const state = useSelector(({ favoritesData }:any) => favoritesData.favor);
  console.log(state);
  return (
    <UserLayout>
      <div className={styles.block}>
        {state && state.map((item:any, id:number) => <UserLikeItem key={id} {...item} />)}
        {state.length ? null: <p>товаров нет в избранном <Link href='/market'><a>добавьте </a></Link>товары</p>}
      </div>
    </UserLayout>
  );
};
export default UserLike;
