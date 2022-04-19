import styles from "./market.module.scss";
import MarketItem from "./marketItem";
import { breadCamps, changeMenuShop } from "@/redux/actions";
import { FC, useEffect } from "react";
import { connect } from "react-redux";

const Market: FC = ({ breadCamps, changeMenuShop, marketData }): JSX.Element => {
  useEffect(() => {
    breadCamps(["магазин"]);
    changeMenuShop();
  }, []);
  return (
    <div className={styles.market}>
      <div className={styles.filter}>filter</div>
      <div className={styles.main}>
		  {marketData && marketData.data.map((item, id) => <MarketItem key={id} {...item}/>)}
      </div>
    </div>
  );
};

const mapStateTopProps = ({marketData}) => {
	return {
		marketData
	}
}

const mapDispatchToProps = {
  breadCamps,
  changeMenuShop,
};

export default connect(mapStateTopProps, mapDispatchToProps)(Market);
