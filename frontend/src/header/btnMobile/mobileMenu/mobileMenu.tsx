import styles from './mobileMenu.module.scss';
import cn from 'classnames';

const MobileMenu = ({active}) => {

  return (
	<div className={cn(styles.mobileMenu, {
		[styles.active]: active
	})}>MobileMenu</div>
  )
}
export default MobileMenu