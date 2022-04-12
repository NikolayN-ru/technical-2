import ItemMenuDown from "./itemMenuDown";
import propManuDown from "./menuDown.interface";
import styles from "./menuDown.module.scss";
import Image from "next/image";
import { FC } from "react";
import { connect } from "react-redux";

// const items = [
//   { id: 1, title: "ОБъявления", icon: "/list.svg" },
//   { id: 2, title: "Магазины", icon: "/magazine.svg" },
//   { id: 3, title: "Благотворительность", icon: "/handle.svg" },
// ];

const menuDown: FC = ({ menuDown }):JSX.Element => {
  return (
    <div className={styles.menuDown}>
      <Image src="/burger.svg" width="14px" height="14px" alt="burger" />
      {menuDown.map(({ id, title, icon }: propManuDown) => (
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
