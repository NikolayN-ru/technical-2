import LoaderSkeleton from "../loaderSkeleton";
import { naviMenuProps, naviMenuItemProps } from "./naviManu.interface";
import styles from "./naviMenu.module.scss";
import NaviMenuItem from "./naviMenuItem";
import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";

const NaviMenu: FC<naviMenuProps> = ({ menu }): JSX.Element => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setState(menu);
    }, 400);
  });

  return (
    <div className={styles.naviMenu}>
      {state ? (
        state.menu.map((item: naviMenuItemProps) => (
          <NaviMenuItem key={item.id} {...item} />
        ))
      ) : (
        <LoaderSkeleton count={7} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.naviMenu,
  };
};

export default connect(mapStateToProps, null)(NaviMenu);
