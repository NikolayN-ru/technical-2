import ItemMenuDown from "./itemMenuDown";
import { propMenuDown, propMenuDownItem } from "./menuDown.interface";
import styles from "./menuDown.module.scss";
import Image from "next/image";
import { FC } from "react";
import { connect } from "react-redux";
import MenuDrop from "@/src/components/menuDrop";

const menuDown: FC<propMenuDown> = ({ menuDown }): JSX.Element => {
  return (
    <div className={styles.menuDown}>
      <MenuDrop />
      {menuDown && menuDown.map(({ id, title, icon }: propMenuDownItem) => (
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
