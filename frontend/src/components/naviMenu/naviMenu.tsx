import styles from "./naviMenu.module.scss";
import NaviMenuItem from "./naviMenuItem";
import { FC } from "react";
import { connect } from "react-redux";
import { naviMenuProps } from "./naviManu.interface";

const NaviMenu:FC<naviMenuProps> = ({ menu }) => {
  return (
    <div className={styles.naviMenu}>
      {menu.menu.map((item) => (
        <NaviMenuItem key={item.id} {...item} />
        
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.naviMenu,
  };
};

export default connect(mapStateToProps, null)(NaviMenu);
