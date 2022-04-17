import styles from './MenuItemDataDesc.module.scss';

const MenuItemDataDesc = ({dataItem}) => {
  return (
	<div className={styles.dataItem}>
		{dataItem && dataItem.map((item, id) => (
			<ul key={id}>
				<p>{item.title}</p>
				{item.data && item.data.map((item, id) => (
				<li key={id}>{item}</li>
				))}
			</ul>
		))}
	</div>
  )
}
export default MenuItemDataDesc