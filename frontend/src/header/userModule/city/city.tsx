import React from 'react'
import styles from './city.module.scss';
import {connect} from 'react-redux'; 
import CityItem from './cityItem';
import { map } from 'ramda';


const City = ({city}) => {
	// console.log(city)
  return (
	<div className={styles.city}>
		<span>{city.mainCity}</span>
		<div className={styles.cityMenu}>
			{city.city && city.city.map(item => <CityItem key={item} item={item}/>)}
		</div>
	</div>
  )
}

const mapStateToProps = state => {
	return {
		city: state.city
	}
}

export default connect(mapStateToProps, null)(City);