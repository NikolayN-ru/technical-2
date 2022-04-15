import UserLayout from "../userLayout";
import UserLikeItem from "./userLikeItem";
import styles from './userLike.module.scss';

const UserLike = () => {
  return (
    <UserLayout>
      <div className={styles.block}>
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
        <UserLikeItem />
      </div>
    </UserLayout>
  );
};
export default UserLike;
