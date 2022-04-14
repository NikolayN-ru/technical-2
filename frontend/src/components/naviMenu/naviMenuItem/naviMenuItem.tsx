import styles from "./naviMenuItem.module.scss";
import cn from "classnames";
import Image from "next/image";
import { FC } from "react";
import { naviMenuItemProps } from "./naviMenuItem.interface";
import {connect} from 'react-redux';
import { clickNaviMenuItem } from "redux/actions";
import LoaderSkeleton from "@/src/components/loaderSkeleton";

const NaviMenuItem:FC<naviMenuItemProps> = ({ title, active, link, image, width, height, clickNaviMenuItem }):JSX.Element => {
  return title ? ( 
    <div
      className={cn(styles.naviMenuItem, {
        [styles.active]: active == true,
      })}
    >
      <Image src={image} width={width} height={height} alt="title" />
      <span onClick={()=>clickNaviMenuItem(title)}>{title}</span>
    </div>
  ) : <LoaderSkeleton />
};

const mapDispatchToProps = {
	clickNaviMenuItem,
}

export default connect(null, mapDispatchToProps)(NaviMenuItem);

