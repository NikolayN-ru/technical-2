import MenuItem from "./menuItem";
import { menuItemsItemProps, menuItemsProps } from "./menuMain.interface";
import styles from "./menuMain.module.scss";
import Image from "next/image";
import { FC } from "react";
import { connect } from "react-redux";

const MainMenu: FC<menuItemsProps> = ({ menuItems }): JSX.Element => {
  return (
    <div className={styles.menuMain}>
      <Image src="/logo.svg" width="100%" height="30px" alt="logo" />
      {menuItems.map(({ id, title, linkItem }: menuItemsItemProps) => (
        <MenuItem key={id} title={title} linkItem={linkItem} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    menuItems: state.mainMenu,
  };
};

export default connect(mapStateToProps, null)(MainMenu);
