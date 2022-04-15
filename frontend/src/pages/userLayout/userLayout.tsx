import styles from "./UserLayout.module.scss";
import NaviData from "@/src/components/naviData";
import NaviMenu from "@/src/components/naviMenu";
import NaviStatistics from "@/src/components/naviStatistics";
import { FC } from "react";

const UserLayout: FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.board}>
      <div className={styles.navi}>
        <NaviData />
        <NaviMenu />
        <NaviStatistics />
      </div>
      <div className={styles.main}>
        <div className={styles.data}>{children}</div>
        {/* {children} */}
      </div>
    </div>
  );
};

export default UserLayout;
