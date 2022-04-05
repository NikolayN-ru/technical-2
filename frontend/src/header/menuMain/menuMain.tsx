import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import styles from "./menuMain.module.scss";

const MainMenu = () => {
  const [state, setState] = useState("");

  setTimeout(() => {
    setState("что-то");
  }, 3000);
  return (
    <div className={styles.menuMain}>
      MainMenu
      {state || <Skeleton count={1} />}
    </div>
  );
};

export default MainMenu;
