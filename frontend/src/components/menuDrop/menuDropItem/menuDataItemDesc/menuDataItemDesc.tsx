import styles from './menuItemDataDesc.module.scss';

const MenuItemDataDesc = ({dataItem}:any) => {
  return (
	<div className={styles.dataItem}>
		{dataItem && dataItem.map((item:any, id:number) => (
			<ul key={id}>
				<p>{item.title}</p>
				{item.data && item.data.map((item:any, id:number) => (
				<li key={id}>{item}</li>
				))}
			</ul>
		))}
	</div>
  )
}
export default MenuItemDataDesc