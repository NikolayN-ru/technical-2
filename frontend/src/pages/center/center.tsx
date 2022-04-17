import styles from './center.module.scss';
import Image from 'next/image';
import Btn1 from '@/src/components/btn1';
import Btn4 from '@/src/components/btn4/btn4';
import {connect} from 'react-redux';
import { breadCamps, changeMenuDownService } from "@/redux/actions";
import { useEffect } from 'react';
import { breadCampsProps } from './center.interface';


const Center = ({breadCamps, changeMenuDownService}:breadCampsProps) => {
	useEffect(() => {
		breadCamps(["cервисный центр",])
		changeMenuDownService()
	},[])
  return (
		  <div className={styles.senter}>

	  <div className={styles.slider}>
		<Image src='/slideSenter1.png' width='1440px' height='500px' alt='slide'/>
		<div className={styles.description}>
			<p>Просто решаем сложные проблемы</p>
			<span>Производим ремонт любой сложности с гарантией. Оставьте заявку на ремонт прямо сейчас!</span>
			<div className={styles.btn}>
			<Btn1 title="Оставить заявку" more={true}/>
			<Btn1 title="Узнать статус ремонта" more={true}/>
			</div>
	  </div>
		</div>

		<section className={styles.perrmissions}>
			<div className={styles.perrmissionsItem}>
				<span>Быстро</span><Image src='/illustration1.png' width='100px' height='100px' alt='illustration'/>
			</div>
			<div className={styles.perrmissionsItem}>
				<span>С гарантией</span><Image src='/illustration2.png' width='100px' height='100px' alt='illustration'/>
			</div>
			<div className={styles.perrmissionsItem}>
				<span>Профессионально</span><Image src='/illustration3.png' width='100px' height='100px' alt='illustration'/>
			</div>
			<div className={styles.perrmissionsItem}>
				<span>Отличная цена</span><Image src='/illustration4.png' width='100px' height='100px' alt='illustration'/>
			</div>
		</section>

		<section>

		</section>
	</div>
  )
}

const mapDispatchToProps = {
	breadCamps,
	changeMenuDownService
}

export default connect(null, mapDispatchToProps)(Center);	