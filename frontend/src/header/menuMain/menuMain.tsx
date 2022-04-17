import MenuItem from "./menuItem";
import { menuItemsItemProps, menuItemsProps } from "./menuMain.interface";
import styles from "./menuMain.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { connect } from "react-redux";

const MainMenu: FC<menuItemsProps> = ({ menuItems }): JSX.Element => {
  return (
    <div className={styles.menuMain}>
      <Link href="/" passHref>
        <a>
          <Image src="/logo.svg" width="100%" height="30px" alt="logo" />
        </a>
      </Link>
      {menuItems &&
        menuItems.map(({ id, title, linkItem }: menuItemsItemProps) => (
          <MenuItem key={id} title={title} linkItem={linkItem} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ mainMenu }: { mainMenu: menuItemsProps }) => {
  return {
    menuItems: mainMenu,
  };
};

export default connect(mapStateToProps, null)(MainMenu);
