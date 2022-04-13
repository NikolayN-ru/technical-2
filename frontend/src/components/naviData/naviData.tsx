import styles from "./naviData.module.scss";
import Image from "next/image";
import React from "react";

const NaviData = () => {
  return (
    <div className={styles.naviData}>
      <div className={styles.naviDataLogo}>
        <Image src="/logoMain.png" width="70" height="70" alt="logo" />
        <div className={styles.naviDataLogoDesc}>
          <p>Алексей К.</p>
          <div className={styles.naviDataStar}>
            <span>5</span>
            <Image src="/star.svg" width="10" height="10" alt="logo" />
            <Image src="/star.svg" width="10" height="10" alt="logo" />
            <Image src="/star.svg" width="10" height="10" alt="logo" />
            <Image src="/star.svg" width="10" height="10" alt="logo" />
            <Image src="/star.svg" width="10" height="10" alt="logo" />
          </div>
          <p>на Dily.ru с 2020 года</p>
        </div>
      </div>
      <div className={styles.naviDataFolovers}>
        <div className={styles.naviDataFoloversItem}>
          <p>50</p>
          <span>подписок</span>
        </div>
        <div className={styles.naviDataFoloversItem}>
          <p>50</p>
          <span>подписчиков</span>
        </div>
        <div className={styles.naviDataFoloversItem}>
          <p>50</p>
          <span>отзывов</span>
        </div>
      </div>
    </div>
  );
};

export default NaviData;
