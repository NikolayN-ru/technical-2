import { mainCity } from "../../../../../redux/actions";
import { cityItemProps } from "./cityItem.interface";
import styles from "./cityItem.module.scss";
import { FC } from "react";
import { connect } from "react-redux";

const CityItem: FC<cityItemProps> = ({ item, mainCity }): JSX.Element => {
  return (
    <div className={styles.cityItem}>
      <button onClick={() => mainCity(item)}>{item}</button>
    </div>
  );
};

const mapDispatchToProps = {
  mainCity,
};

export default connect(null, mapDispatchToProps)(CityItem);
