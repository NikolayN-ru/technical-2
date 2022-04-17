import Extension from "./extension";
import styles from "./header.module.scss";
import MainMenu from "./menuMain/menuMain";
import UserModule from "./userModule";
import { fetchPhones } from "@/redux/actions";
import { FC, useEffect } from "react";
import { connect } from "react-redux";

// const Header: FC = ({ phones, fetchPhones, camps3 }): JSX.Element => {

interface HeaderProps {
  fetchPhones: () => void;
}

const Header: FC<HeaderProps> = ({ fetchPhones }): JSX.Element => {
  useEffect(() => {
    fetchPhones();
  }, []);
  return (
    <div className={styles.wrap}>
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <MainMenu />
        <UserModule />
      </div>
      <Extension />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
    camps3: state,
  };
};

const mapDispatchToProps = {
  fetchPhones,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
