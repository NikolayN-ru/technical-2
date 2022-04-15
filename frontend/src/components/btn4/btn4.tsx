import styles from './btn4.module.scss';
import Image from 'next/image';

const Btn4 = ({title, img='/plusGreen.svg', ico=true}) => {
  return (
	<div className={styles.btn4}>
		<span>{title}</span>
		{ico && <Image src={img} width='18' height='18' alt='plusGreen' />}
	</div>
  )
}
export default Btn4;
