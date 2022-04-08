import MenuItem from "./menuItem";
import styles from "./menuMain.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const menuItem = [
  { id: 1, title: "Доска объявлений" },
  { id: 2, title: "Сервисный центр" },
  { id: 3, title: "Интернет-магазин Dily.ru" },
  { id: 4, title: "Скупка" },
];

const MainMenu = () => {
  const [state, setState] = useState(menuItem);

  // setTimeout(() => {
  //   setState("что-то");
  // }, 3000);
  return (
    <div className={styles.menuMain}>
      <Image src="/logo.svg" width="100%" height="30px" alt="logo" />
      {state.map(({ id, title }) => (
        <MenuItem key={id} title={title} />
        ))}
      {/* {state || <Skeleton count={1} />} */}
    </div>
  );
};

export default MainMenu;
