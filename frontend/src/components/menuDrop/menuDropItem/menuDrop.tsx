import styles from "./MenuDropItem.module.scss";
import Image from "next/image";
import MenuItemDataDesc from "./menuDataItemDesc";

const MenuDropItem = ({ title, dataItem }) => {
  return (
    <div className={styles.menuDropItem}>
      <p>{title}</p>
      <div className={styles.menuDropTwo}>
		  <MenuItemDataDesc dataItem={dataItem}/>
        {/* {dataItem && dataItem[0] + " " + dataItem[1]} */}
        <div className={styles.icoPhone}>
          <Image src="/icoPhone.png" width="200" height="200" alt="icoPhone" />
        </div>
      </div>
    </div>
  );
};
export default MenuDropItem;
