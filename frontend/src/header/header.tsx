import Extension from "./extension";
import styles from "./header.module.scss";
import MainMenu from "./menuMain/menuMain";
import UserModule from "./userModule";
import { fetchPhones } from "@/redux/actions";
import { FC, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import BtnMobile from "./btnMobile";

interface HeaderProps {
  fetchPhones: () => void;
}

const Header: FC<HeaderProps> = (): JSX.Element => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPhones());
  // }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <MainMenu />
        <UserModule />
      </div>
      <Extension />
      <div className={styles.btnMobile}>
      <BtnMobile />
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     phones: state.phones,
//     camps3: state,
//   };
// };

// const mapDispatchToProps = {
//   fetchPhones,
// };

// export default connect(mapStateToProps, null)(Header);

export default Header;
