import styles from './menuItem.module.scss';
import { FC } from 'react';
import {propsMenuItem} from "./menuItem.inteface";

const MenuItem:FC<propsMenuItem> = ({title}) => {
  return (
	<div className={styles.item}>{title}</div>
  )
}

export default MenuItem