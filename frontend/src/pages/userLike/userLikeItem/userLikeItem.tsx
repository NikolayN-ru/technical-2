import styles from "./userLikeItem.module.scss";
import { favoritesDel } from "@/redux/actions";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { userLinkItemProps } from "./userLinkItem.interface";

const UserLikeItem:FC<userLinkItemProps> = ({ id, utlImg = "/phone22.png", title = "no", price }): JSX.Element=> {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <Image src={utlImg} width="204" height="166" alt={title} />
      <h6>{title}</h6>
      <p>{price}</p>
      <span>Москва</span>
      <Image src="/logoMain.png" width="24" height="24" alt="logoItem" />
      <div className={styles.like} onClick={() => dispatch(favoritesDel(id))}>
        <Image src="/likeF.svg" width="15" height="15" alt="like" />
      </div>
    </div>
  );
};
export default UserLikeItem;
