import styles from "./userLikeItem.module.scss";
import Image from "next/image";

const UserLikeItem = ({ utlImg = "/phone22.png", title = "no" }) => {
  return (
    <div className={styles.item}>
      <Image src={utlImg} width="204" height="166" alt={title} />
      <h6>Телефон Xiaomi Redmi </h6>
      <p>10 000 ₽</p>
      <span>Москва</span>
      <Image src="/logoMain.png" width="24" height="24" alt="logoItem" />
      <div className={styles.like} onClick={() => console.log("ITEM")}>
        <Image src="/likeF.svg" width="15" height="15" alt="like" />
      </div>
    </div>
  );
};
export default UserLikeItem;
