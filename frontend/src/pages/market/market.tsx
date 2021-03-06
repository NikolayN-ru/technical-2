import styles from "./market.module.scss";
import MarketItem from "./marketItem";
import { breadCamps, changeMenuShop } from "@/redux/actions";
import { FC, useEffect } from "react";
import { connect, useSelector } from "react-redux";

const Market: FC = ({ breadCamps, changeMenuShop }:any): JSX.Element => {
  const marketData = useSelector(({marketData}:any) => marketData)

  useEffect(() => {
    breadCamps(["магазин"]);
    changeMenuShop();
  }, []);

  return (
    <div className={styles.market}>
      <div className={styles.filter}>...filter-block-prosessing</div>
      <div className={styles.main}>
		  {marketData && marketData.data.map((item:any, id:number) => <MarketItem key={id} {...item}/>)}
      </div>
    </div>
  );
};

// const mapStateTopProps = ({marketData}) => {
// 	return {
// 		marketData
// 	}
// }

const mapDispatchToProps = {
  breadCamps,
  changeMenuShop,
};

export default connect(null, mapDispatchToProps)(Market);
