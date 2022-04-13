import styles from "./naviStatictics.module.scss";
import Image from "next/image";

const NaviStatictics = () => {
  return (
    <div className={styles.naviStat}>
      <h2>15 000 ₽</h2>
      <p>заработали за 90 дней</p>
      <Image src="/Group.png" width="130px" height="130px" alt="statictics" />
      <div className={styles.naviStatCount}>
        <div className={styles.naviStatCountOne}>
          <p>10</p>
          <span>активные</span>
        </div>
        <div className={styles.naviStatCountTwo}>
          <p>3</p>
          <span>продано</span>
        </div>
      </div>
    </div>
  );
};

export default NaviStatictics;
