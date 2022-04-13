import MenuItem from "./menuItem";
import styles from "./menuMain.module.scss";
import Image from "next/image";
import React, { useState, FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {connect} from 'react-redux';

// const menuItem = [
//   { id: 1, title: "Доска объявлений" },
//   { id: 2, title: "Сервисный центр" },
//   { id: 3, title: "Интернет-магазин Dily.ru" },
//   { id: 4, title: "Скупка" },
// ];

const MainMenu:FC = ({menuItems}: any) => {
  // const [state, setState] = useState(menuItem);
  // console.log(menuItems,'menuItems')
  // setTimeout(() => {
  //   setState("что-то");
  // }, 3000);
  return (
    <div className={styles.menuMain}>
      <Image src="/logo.svg" width="100%" height="30px" alt="logo" />
      {menuItems.map(({ id, title, linkItem }) => (
        <MenuItem key={id} title={title} linkItem={linkItem} />
        ))}
      {/* {state || <Skeleton count={1} />} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menuItems: state.mainMenu
  }
}

export default connect(mapStateToProps, null)(MainMenu);
