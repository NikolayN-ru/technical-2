import { changeMenuSale } from '@/redux/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './salePage.module.scss';


const SalePage = ({changeMenuSale}) => {
	useEffect(() => {
		changeMenuSale()
	},[])
  return (
	<div>SalePage</div>
  )
}

const mapDispatchToProps = {changeMenuSale}

export default connect(null, mapDispatchToProps)(SalePage);