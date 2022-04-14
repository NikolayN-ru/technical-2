import ItemMenuDown from "./itemMenuDown";
import { propMenuDown, propMenuDownItem } from "./menuDown.interface";
import styles from "./menuDown.module.scss";
import Image from "next/image";
import { FC } from "react";
import { connect } from "react-redux";

const menuDown: FC<propMenuDown> = ({ menuDown }): JSX.Element => {
  return (
    <div className={styles.menuDown}>
      <Image src="/burger.svg" width="14px" height="14px" alt="burger" />
      {menuDown.map(({ id, title, icon }: propMenuDownItem) => (
        <ItemMenuDown key={id} title={title} icon={icon} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    menuDown: state.menuDown,
  };
};

export default connect(mapStateToProps, null)(menuDown);
