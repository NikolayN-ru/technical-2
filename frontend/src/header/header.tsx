import styles from "./header.module.scss";
import MainMenu from "./menuMain/menuMain";
import Image from "next/image";
import UserModule from "./userModule";
import Extension from "./extension";

const Header = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.line}></div>
      {/* <div className={styles.topBtn}> */}
        <div className={styles.menu}>
          <MainMenu />
          <UserModule />
        </div>
        <Extension />
      {/* </div> */}
    </div>
  );
};

export default Header;
