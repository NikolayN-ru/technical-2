import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import MainMenu from "./menuMain/menuMain";

const Header = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.line}></div>
      <Image src="/logo.svg" width="100%" height="100%" alt="logo" />
      <div className={styles.menu}>
        <MainMenu />
      </div>
    </div>
  );
};

export default Header;