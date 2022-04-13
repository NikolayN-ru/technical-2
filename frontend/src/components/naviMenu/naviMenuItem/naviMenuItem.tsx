import styles from "./naviMenuItem.module.scss";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { naviMenuItemProps } from "./naviMenuItem.interface";
import {connect} from 'react-redux';
import { clickNaviMenuItem } from "redux/actions";

const NaviMenuItem:FC<naviMenuItemProps> = ({ title, active, link, image, width, height, clickNaviMenuItem }):JSX.Element => {
  return (
    // <Link href={link}>
    <div
      className={cn(styles.naviMenuItem, {
        [styles.active]: active == true,
      })}
    >
      <Image src={image} width={width} height={height} alt="title" />
      <span onClick={()=>clickNaviMenuItem(title)}>{title}</span>
    </div>
    // </Link>
  );
};

const mapDispatchToProps = {
	clickNaviMenuItem,
}

export default connect(null, mapDispatchToProps)(NaviMenuItem);

