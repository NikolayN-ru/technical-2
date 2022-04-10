import styles from "./header.module.scss";
import MainMenu from "./menuMain/menuMain";
import Image from "next/image";
import UserModule from "./userModule";
import Extension from "./extension";
import {connect} from 'react-redux';
import {fetchPhones} from '../../redux/actions';
import { useEffect } from "react";

const Header = ({state, fetchPhones}: any) => {
  useEffect(()=>{
    fetchPhones()
  },[])
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

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = {
  fetchPhones,
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
